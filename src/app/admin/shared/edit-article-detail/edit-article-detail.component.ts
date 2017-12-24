import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DatePipe, Location} from '@angular/common';
import {ArticleService} from '../../../shared/services/article.service';
import {ArticleSize} from '../../../shared/enum/article-size.enum';
import {ArticleType} from '../../../shared/enum/article-type.enum';
import {EventService} from '../../../shared/services/event.service';
import {topic} from '../../../shared/model/research-news-models';
import {ResearchServices} from '../../../shared/services/research.services';
import {FileUploader} from 'ng2-file-upload';
import {AuthService} from '../auth.service';
import {DomSanitizer} from '@angular/platform-browser';


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
  @Input() showtopic = false;
  isShowDoneButton = false;
  isEditingEvent = false;

  articleId: string;
  articleType: string;
  articleSize = ArticleSize;
  isAddNew = false;
  topics: topic[] = [];
  editorLanguage = '中文';
  editorLocale = 'en';
  specifictype = null;
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
              private authService: AuthService, private sanitizer: DomSanitizer,
              private researchservices: ResearchServices) {
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

        // tslint:disable-next-line:whitespace
        // tslint:disable-next-line:one-line
        if (!this.isAddNew) {
          this.updateData();
        }
        // tslint:disable-next-line:one-line
        else {
          this.addnew();
        }
      }
    };

    this.en = {
      firstDayOfWeek: 0,
      dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      // tslint:disable-next-line:max-line-length
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    };
  }

  get Locale() {
    return localStorage.getItem('locale');
  }

  ngOnInit() {
    if (!this.article) {
      this.article = {};
      this.isShowDoneButton = true;

      this.route.params.subscribe(params => {
        this.articleId = params['id'];
        console.log(params.type);
        // tslint:disable-next-line:one-line
        if (params.type === 'research-news') {
          this.specifictype = 30;
        } else if (params.type === 'laboratory') {
          this.specifictype = 31;
        } else if (params.type === 'conferences-and-seminars') {
          this.specifictype = 32;
        } else if (params.type === 'areas') {
          this.specifictype = 33;
        } else if (params.type === 'posters') {
          // tslint:disable-next-line:whitespace
          this.specifictype = 34;
        } else if (params.type === 'department-news') {
          this.specifictype = 40;
        } else if (params.type === 'course-news') {
          this.specifictype = 41;
        } else if (params.type === 'event') {
          this.specifictype = 42;
        } else if (params.type === 'school-leadership') {
          this.specifictype = 43;
        }
        console.log(this.specifictype);
        if (this.articleId === null || this.articleId === undefined) {
          this.isAddNew = true;

          this.showPreviewImageEditor = true;
          this.loadingtopic(this.specifictype);
        } else {
          this.articleService.getArticlesById(this.articleId).subscribe(
            data => {
              console.log(data);
              this.article = data['content'];

              this.loadingtopic(this.article.specificType);
              // loading topic

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
        }
      });
    }
  }

  onSelectDateTime() {
    this.article.beginDate = this.datePipe.transform(this.eventbeginDate, 'yyyy-MM-dd\'T\'hh:mm:ss');
  }

  finishEdit() {
    if (this.uploader.queue.length > 0) {
      this.uploader.queue[0].upload();
    }
    // tslint:disable-next-line:one-line
    else if (this.isAddNew) {
      this.addnew();
    }
    // tslint:disable-next-line:one-line
    else {
      this.updateData();
    }
  }

// tslint:disable-next-line:one-line
  loadingtopic(spcefictype) {
    if (spcefictype === ArticleType.ResearchNews) {
      this.showtopic = true;
      // loading topics
      // tslint:disable-next-line:no-shadowed-variable
      this.researchservices.getresearchtopic().subscribe(data => {
          this.topics = data['content'];

        },
        error => {
          console.log(error);
        });


    }
    // tslint:disable-next-line:one-line
    else if (spcefictype === ArticleType.Laboratory) {
      // tslint:disable-next-line:no-shadowed-variable
      // tslint:disable-next-line:whitespace
      this.showtopic = true;
      this.researchservices.getlaboratorytopic().subscribe(data => {
        this.topics = data['content'];
      }, error => {
        console.log(error);
        alert('could not load laboratory topic');
      });
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
          console.log(data);
          this.location.back();
        },
        err => {
          console.log(err);
        }
      );
    }
    this.articleChange.emit(this.article);


  }

// tslint:disable-next-line:one-line
  addnew() {
    this.article.spcefictype = this.specifictype;
    this.article.type = 3;
    this.article.id = null;
    console.log(this.article);
    this.articleService.addArticle(this.article).subscribe(data => {
      console.log(data);
      this.location.back();
    }, error => {
      console.log(error);
    });
  }

  switchEditorLanguage() {
    this.editorLanguage = this.editorLanguage === 'English' ? '中文' : 'English';
    this.editorLocale = this.editorLocale === 'en' ? 'zh-tw' : 'en';
  }

  openImageUploader() {
    console.log('new image uploader');
  }

  selectedtopic(i) {
    console.log(this.topics);
    // tslint:disable-next-line:no-unused-expression
    !this.topics[i].active ? this.topics[i].active = true : this.topics[i].active = false;
    // tslint:disable-next-line:no-shadowed-variable


  }
}
