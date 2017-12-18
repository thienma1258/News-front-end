import {Component, Input, OnInit} from '@angular/core';
import {Advisor} from '../../../shared/model/advisor';
import {FileUploader} from 'ng2-file-upload';
import {ArticleService} from '../../../shared/services/article.service';
import {AuthService} from '../auth.service';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {AdvisorService} from '../../../shared/services/advisor.service';
import {EmitterService} from '../emitter.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'advisor-infomation',
  templateUrl: './advisor-infomation.component.html',
  styleUrls: ['./advisor-infomation.component.css']
})

export class AdvisorInfomationComponent implements OnInit {
  @Input() advisor: Advisor;
  isEditMode = false;

  selectedImageUrlPath: SafeUrl;
  uploader: FileUploader;

  isShowLoadingIndicator = false;

  public advisorEmitter = EmitterService.get('RemoveAdvisor');

  constructor(private articleService: ArticleService, private authService: AuthService,
              private sanitizer: DomSanitizer, private advisorService: AdvisorService) {
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
        this.advisor.facultyImageUrl = JSON.parse(response)['content'];
        this.updateAdvisor();
      }
    };
  }

  get Locale() {
    return localStorage.getItem('locale');
  }

  ngOnInit() {
    this.selectedImageUrlPath = this.advisor.facultyImageUrl;
  }

  edit() {
    this.isEditMode = true;
  }

  remove() {
    this.advisorEmitter.emit(this.advisor.id);
    this.advisorService.removeAdvisor(this.advisor.id).subscribe(
      data => {

      },
      err => {
        console.log(err);
      }
    );
  }

  done() {
    this.isShowLoadingIndicator = true;
    if (this.uploader.queue.length > 0) {
      this.advisor.facultyImageUrl = this.selectedImageUrlPath.toString();
      this.uploader.queue[0].upload();
    } else {
      this.updateAdvisor();
    }
  }

  updateAdvisor() {
    this.advisorService.editAdvisor(this.advisor).subscribe(
      data => {
        this.isEditMode = false;
        this.isShowLoadingIndicator = false;
      },
      err => {
        console.log(err);
      }
    );
  }
}
