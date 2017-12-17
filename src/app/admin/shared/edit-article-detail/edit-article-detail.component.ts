import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DatePipe, Location} from '@angular/common';
import {ArticleService} from '../../../shared/services/article.service';
import {ArticleSize} from '../../../shared/enum/article-size.enum';
import {EventService} from '../../../shared/services/event.service';
import {FileUploader} from 'ng2-file-upload';
import {AuthService} from '../auth.service';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import * as $ from 'jquery';


@Component({
  selector: 'edit-article-detail',
  templateUrl: './edit-article-detail.component.html',
  styleUrls: ['./edit-article-detail.component.css']
})

export class EditArticleDetailComponent implements OnInit {
  @Input() article: any;
  @Output() articleChange: EventEmitter<any> = new EventEmitter<any>();

  @Input() showTitle = true;
  @Input() showPreviewImageEditor = false;

  isShowDoneButton = false;
  isEditingEvent = false;

  articleId: string;
  articleType: string;
  articleSize = ArticleSize;
  isAddNew = false;

  editorLanguage = '中文';
  editorLocale = 'en';

  en: any;

  eventbeginDate: Date;

  editorOptions = {
    heightMin: 600,
    heightMax: 600
  };

  uploader: FileUploader;
  selectedSlideImageUrlPath: any;

  constructor(private route: ActivatedRoute, private location: Location, private datePipe: DatePipe,
              private articleService: ArticleService, private eventService: EventService,
              private authService: AuthService, private sanitizer: DomSanitizer) {
    this.uploader = new FileUploader(
      {
        url: this.articleService.uploadImageUrl,
        authToken: this.authService.getAccessToken(),
        itemAlias: 'imgFile'
      });
    this.uploader.onAfterAddingFile = (fileItem) => {
      fileItem.withCredentials = false;
      this.selectedSlideImageUrlPath = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(fileItem._file)));
    };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log(JSON.parse(response));
      console.log(JSON.parse(response)['content']);
      console.log(item);
      console.log(status);

      if (status === 200) {
        this.article.previewImageUrl = JSON.parse(response)['content'];
        this.updateData();
      }
    };

    this.en = {
      firstDayOfWeek: 0,
      dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    };
  }

  get Locale() {
    return localStorage.getItem('locale');
  }

  ngOnInit() {
    if (this.article === undefined) {
      this.article = {};
      this.isShowDoneButton = true;
      this.route.params.subscribe(params => {
        this.articleId = params['id'];
        if (this.articleId === null || this.articleId === undefined) {
          this.isAddNew = true;
        }
        this.articleService.getArticlesById(this.articleId).subscribe(
          data => {
            this.article = data['content'];
            this.selectedSlideImageUrlPath = this.article.previewImageUrl;
            if (this.article.beginDate) {
              this.isEditingEvent = true;
              this.eventbeginDate = new Date(this.article.beginDate);
            } else {
              this.showPreviewImageEditor = true;
            }
          },
          err => {
            console.log(err);
          }
        );
      });
    }
  }

  onSelectDateTime() {
    this.article.beginDate = this.datePipe.transform(this.eventbeginDate, 'yyyy-MM-dd\'T\'hh:mm:ss');
  }

  finishEdit() {
    if (this.uploader.queue.length > 0) {
      this.uploader.queue[0].upload();
    } else {
      this.updateData();
    }
  }

  updateData() {
    if (this.isEditingEvent) {
      this.eventService.editEvent(this.article).subscribe(
        data => {

        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.articleService.editArticle(this.article).subscribe(
        data => {

        },
        err => {
          console.log(err);
        }
      );
    }
    this.articleChange.emit(this.article);
    console.log(this.article);
    this.location.back();
  }

  switchEditorLanguage() {
    this.editorLanguage = this.editorLanguage === 'English' ? '中文' : 'English';
    this.editorLocale = this.editorLocale === 'en' ? 'zh-tw' : 'en';
  }

  openImageUploader() {
    console.log('new image uploader');
  }
}
