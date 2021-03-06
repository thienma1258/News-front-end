import {Component, Input, OnInit} from '@angular/core';
import {Advisor} from '../../../shared/model/advisor';
import {AdvisorService} from '../../../shared/services/advisor.service';
import {AdvisorGroup} from '../../../shared/enum/advisor-group.enum';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {FileUploader} from 'ng2-file-upload';
import {ArticleService} from '../../../shared/services/article.service';
import {AuthService} from '../auth.service';
import {EmitterService} from '../emitter.service';

@Component({
  selector: 'advisor-list',
  templateUrl: './advisor-list.component.html',
  styleUrls: ['./advisor-list.component.css']
})
export class AdvisorListComponent implements OnInit {
  @Input() group: AdvisorGroup;

  public advisorEmitter = EmitterService.get('RemoveAdvisor');
  public addDeanEmitter = EmitterService.get('AddDean');

  isAddingNew = false;

  selectedImageUrlPath: SafeUrl;
  uploader: FileUploader;

  isShowCreateNewButton = true;
  isShowLoadingIndicator = false;

  classGroup: string;

  public advisors: Advisor[] = [];
  private newAdvisor: Advisor = new Advisor();

  constructor(private articleService: ArticleService, private authService: AuthService,
              private sanitizer: DomSanitizer, public advisorService: AdvisorService) {
    this.uploader = new FileUploader(
      {
        url: this.articleService.uploadImageUrl,
        authToken: this.authService.getAccessToken(),
        itemAlias: 'imgFile'
      });

    this.uploader.onAfterAddingFile = (fileItem) => {
      fileItem.withCredentials = false;
      this.selectedImageUrlPath = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(fileItem._file)));
    };

    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      if (status === 200) {
        this.newAdvisor.facultyImageUrl = JSON.parse(response)['content'];
        this.createAdvisor();
      }
    };
  }

  get Locale() {
    return localStorage.getItem('locale');
  }

  ngOnInit() {
    switch (this.group) {
      case AdvisorGroup.All:
        this.isShowCreateNewButton = false;
        break;
      case AdvisorGroup.Head:
        this.isShowCreateNewButton = false;
        this.classGroup = 'head-group';
        break;
      case AdvisorGroup.System:
        this.classGroup = 'sys-group';
        break;
      case AdvisorGroup.Elec:
        this.classGroup = 'elec-group';
        break;
      case AdvisorGroup.Com:
        this.classGroup = 'com-group';
        break;
      case AdvisorGroup.Other:
        this.classGroup = 'other-group';
        break;
    }
    this.addDeanEmitter.subscribe(msg => {
      if (this.group === AdvisorGroup.Head) {
        this.advisorService.getAdvisorbyGroup(this.group).subscribe(
          data => {
            this.advisors = data['content'];
          },
          err => {
            console.log(err);
          }
        );
      }
    });
    if (this.group === AdvisorGroup.All) {
      this.advisorService.getAllAdvisors().subscribe(
        data => {
          this.advisors = data['content'];
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.advisorService.getAdvisorbyGroup(this.group).subscribe(
        data => {
          this.advisors = data['content'];
        },
        err => {
          console.log(err);
        }
      );
    }

    this.advisorEmitter.subscribe(msg => {
      this.advisors.forEach(element => {
        if (msg === element.id) {
          console.log(element.id);
          this.advisors.splice(this.advisors.indexOf(element), 1);
        }
      });
    });
  }

  addNewAdvisor() {
    this.isAddingNew = true;
  }

  done() {
    this.isShowLoadingIndicator = true;
    if (this.uploader.queue.length > 0) {
      this.uploader.queue[0].upload();
    } else {
      this.createAdvisor();
    }

  }

  createAdvisor() {
    this.newAdvisor.facultyGroup = this.group;
    this.advisors.push(this.newAdvisor);
    this.advisorService.addAdvisor(this.newAdvisor).subscribe(
      data => {
        this.isAddingNew = false;
        this.isShowLoadingIndicator = false;
      },
      err => {
        console.log(err);
      }
    );
    this.newAdvisor = new Advisor();
  }

  moveUp(index: number) {
    if (index <= 0) {
      return;
    }
    this.advisorService.changeAdvisorOrder(this.advisors[index].id, true).subscribe(
      data => {

      },
      err => {
        console.log(err);
      }
    );
    const c = this.advisors[index];
    this.advisors[index] = this.advisors[index - 1];
    this.advisors[index - 1] = c;
    // this.swap(this.advisors[index], this.advisors[index - 1]);
  }

  moveDown(index: number) {
    if (index >= this.advisors.length - 1) {
      return;
    }
    this.advisorService.changeAdvisorOrder(this.advisors[index].id, false).subscribe(
      data => {

      },
      err => {
        console.log(err);
      }
    );
    const c = this.advisors[index];
    this.advisors[index] = this.advisors[index + 1];
    this.advisors[index + 1] = c;
    // this.swap(this.advisors[index], this.advisors[index + 1]);
  }
}
