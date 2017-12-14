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

  isAddingNew = false;

  selectedImageUrlPath: SafeUrl;
  uploader: FileUploader;

  public advisors: Advisor[];
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
        this.isAddingNew = false;
        this.advisors.push(this.newAdvisor);
        this.advisorService.addAdvisor(this.newAdvisor).subscribe(
          data => {

          },
          err => {
            console.log(err);
          }
        );
        this.newAdvisor = new Advisor();
      }
    };
  }

  get Locale() {
    return localStorage.getItem('locale');
  }

  ngOnInit() {
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
    this.uploader.queue[0].upload();
  }
}
