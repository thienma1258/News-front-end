import {Component, OnInit} from '@angular/core';
import {EmitterService} from '../shared/emitter.service';
import {UniversityService} from '../../shared/services/university.service';
import {UniversityLink} from '../../shared/model/university-link';
import {ArticleService} from '../../shared/services/article.service';
import {UniversityInfo} from '../../shared/model/university-info';
import {Slide} from '../../shared/model/slide';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  universityInfo: UniversityInfo;
  links: UniversityLink[] = [];
  slides: Slide[] = [];

  contactEmitter = EmitterService.get('CONTACT');
  contactEditMode = false;

  linkEmitter = EmitterService.get('LINK');
  linkEditMode = false;

  slideEmitter = EmitterService.get('SLIDE');
  slideEditMode = false;
  selectedSlide: Slide;

  constructor(private universityService: UniversityService, private articleService: ArticleService) {
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
          }
        });
      } else {

      }
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

  get Locale() {
    return localStorage.getItem('locale');
  }

  ngOnInit() {
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
    this.selectedSlide = new Slide();
  }

  slideFinishEdit() {
    this.slideEditMode = false;
  }

  slideCancelEdit() {
    this.slideEditMode = false;
  }
}
