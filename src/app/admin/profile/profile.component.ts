import {Component, OnInit} from '@angular/core';
import {EmitterService} from '../shared/emitter.service';
import {UniversityService} from '../../shared/services/university.service';
import {UniversityLink} from '../../shared/model/university-link';
import {ArticleService} from '../../shared/services/article.service';
import {UniversityInfo} from '../../shared/model/university-info';
import {Slide} from '../../shared/model/slide';
import {FileUploader} from 'ng2-file-upload';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {AuthService} from '../shared/auth.service';
import {Information} from '../../shared/model/information';
import {InformationService} from '../../shared/services/information.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  universityInfo: UniversityInfo;
  links: UniversityLink[] = [];
  slides: Slide[] = [];
  informations: Information[] = [];

  contactEmitter = EmitterService.get('CONTACT');
  contactEditMode = false;

  linkEmitter = EmitterService.get('LINK');
  linkEditMode = false;

  slideEmitter = EmitterService.get('SLIDE');
  slideEditMode = false;
  isAddingNewSlide = false;

  selectedSlide: Slide;

  informationEmitter = EmitterService.get('INFORMATION');
  informationEditMode = false;
  selectedInformation: Information;

  selectedImageUrlPath: SafeUrl;

  editorLanguage = '中文';
  editorLocale = 'en';

  uploader: FileUploader;

  constructor(private universityService: UniversityService, private authService: AuthService,
              private articleService: ArticleService, private sanitizer: DomSanitizer,
              private informationService: InformationService) {
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
        this.selectedSlide.slideImageUrl = JSON.parse(response)['content'];
        this.updateSlide();
      }
    };

    // this.informations = [
    //   {
    //     id: '1',
    //     englishTitle: 'Academics',
    //     chineseTitle: 'Academics C',
    //     englishContent: 'english content 1',
    //     chineseContent: 'chinese content 1',
    //     previewImageUrl: './assert/images/077.jpg',
    //     redirectUrl: 'https://www.google.com'
    //   },
    //   {
    //     id: '2',
    //     englishTitle: 'Admissions',
    //     chineseTitle: 'Admissions C',
    //     englishContent: 'english content 2',
    //     chineseContent: 'chinese content 2',
    //     previewImageUrl: './assert/images/077.jpg',
    //     redirectUrl: 'https://www.google.com'
    //   },
    //   {
    //     id: '3',
    //     englishTitle: 'Research',
    //     chineseTitle: 'Research C',
    //     englishContent: 'english content 3',
    //     chineseContent: 'chinese content 3',
    //     previewImageUrl: './assert/images/077.jpg',
    //     redirectUrl: 'https://www.google.com'
    //   },
    //   {
    //     id: '4',
    //     englishTitle: 'Student Life',
    //     chineseTitle: 'Student Life C',
    //     englishContent: 'english content 4',
    //     chineseContent: 'chinese content 4',
    //     previewImageUrl: './assert/images/077.jpg',
    //     redirectUrl: 'https://www.google.com'
    //   }
    // ];

    this.informationService.getInformations().subscribe(
      data => {
        this.informations = data['content'];
      },
      err => {
        console.log(err);
      }
    );
  }

  get Locale() {
    return localStorage.getItem('locale');
  }

  ngOnInit() {
    this.universityInfo = new UniversityInfo();
    this.contactEmitter.subscribe(msg => {
      if (msg === 'edit') {
        this.contactEditMode = true;
      } else if (msg === 'done') {
        this.contactEditMode = false;
        this.contactFinishEdit();
      } else {
        this.contactEditMode = false;
      }
    });
    this.linkEmitter.subscribe(msg => {
      if (msg === 'edit') {
        this.linkEditMode = true;
      } else if (msg === 'done') {
        this.linkEditMode = false;
        this.linkFinishEdit();
      } else {
        this.linkEditMode = false;
      }
    });

    this.slideEmitter.subscribe(msg => {
      if (msg.split('/')[0] === 'edit') {
        this.slideEditMode = true;
        this.slides.forEach(element => {
          if (element.id === msg.split('/')[1]) {
            this.selectedSlide = element;
            this.selectedImageUrlPath = element.slideImageUrl;
            console.log(this.selectedImageUrlPath);
          }
        });
      } else if (msg.split('/')[0] === 'delete') {
        this.slides.forEach(element => {
          if (element.id === msg.split('/')[1]) {
            this.selectedSlide = element;
            this.deleteSlide();
          }
        });
      }
    });

    this.informationEmitter.subscribe(msg => {
      this.informationEditMode = true;
      this.informations.forEach(element => {
        if (element.id === msg) {
          this.selectedInformation = element;
          this.selectedImageUrlPath = element.previewImageUrl;
        }
      });
    });

    this.universityService.getUniversityInfo().subscribe(
      data => {
        this.universityInfo = data['content'];
      },
      err => {
        console.log(err);
      }
    );

    this.universityService.getLinks().subscribe(
      data => {
        this.links = data['content'];
      },
      err => {
        console.log(err);
      }
    );

    this.articleService.getSlides().subscribe(
      data => {
        this.slides = data['content'];
      },
      err => {
        console.log(err);
      }
    );
  }

  contactFinishEdit() {
    this.universityService.editUniverSityInfo(this.universityInfo).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  linkFinishEdit() {
    this.universityService.editLinks(this.links).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  addNewSlide() {
    this.slideEditMode = true;
    this.isAddingNewSlide = true;
    this.selectedImageUrlPath = '';
    this.selectedSlide = new Slide();
  }

  deleteSlide() {
    if (confirm('Are you sure to delete this slide? ')) {
      this.slides.splice(this.slides.indexOf(this.selectedSlide), 1);
      this.articleService.removeSlide(this.selectedSlide.id).subscribe(
        data => {
          console.log(this.selectedSlide);
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  slideFinishAdding() {
    this.slideEditMode = false;
    this.isAddingNewSlide = false;
    this.slides.push(this.selectedSlide);
    this.articleService.addSlide(this.selectedSlide).subscribe(
      data => {

      },
      err => {
        console.log(err);
      }
    );
  }

  slideFinishEdit() {
    this.slideEditMode = false;
    if (this.uploader.queue.length > 0) {
      this.selectedSlide.slideImageUrl = this.selectedImageUrlPath.toString();
      this.uploader.queue[0].upload();
    } else {
      this.updateSlide();
    }
  }

  updateSlide() {
    if (this.isAddingNewSlide) {
      this.slideFinishAdding();
    } else {
      this.articleService.editSlide(this.selectedSlide).subscribe(
        data => {

        },
        err => {
          console.log(err);
        }
      );
    }
  }

  slideCancelEdit() {
    this.slideEditMode = false;
  }

  informationFinishEdit() {
    this.informationEditMode = false;
    this.updateInformation();
  }

  updateInformation() {
    this.informationService.editInfomation(this.selectedInformation).subscribe(
      data => {

      },
      err => {
        console.log(err);
      }
    );
  }

  informationCancelEdit() {
    this.informationEditMode = false;
  }

  switchEditorLanguage() {
    this.editorLanguage = this.editorLanguage === 'English' ? '中文' : 'English';
    this.editorLocale = this.editorLocale === 'en' ? 'zh-tw' : 'en';
  }
}
