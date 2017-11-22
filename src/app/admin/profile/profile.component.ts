import {Component, OnInit} from '@angular/core';
import {EmitterService} from '../shared/emitter.service';
import {UniversityService} from '../../shared/services/university.service';
import {UniversityLink} from '../../shared/interface/university-link';
import {Article} from '../../shared/interface/article';
import {ArticleService} from "../../shared/services/article.service";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  universityEnglishName;
  universityChineseName;
  universityEnglishAddress;
  universityChineseAddress;
  universityPhoneNumbers: string[];
  universityFaxNumbers;
  links: UniversityLink[];
  slides: Article[] = [];

  contactEmitter = EmitterService.get('CONTACT');
  contactEditMode = false;

  linkEmitter = EmitterService.get('LINK');
  linkEditMode = false;

  slideEmitter = EmitterService.get('SLIDE');
  slideEditMode = false;
  selectedSlide: Article;

  constructor(private universityService: UniversityService, private articleService: ArticleService) {
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
      this.slides.forEach(element => {
        if (element.id === msg.split('/')[1]) {
          this.selectedSlide = element;
        }
      });
      if (msg.split('/')[0] === 'edit') {
        this.slideEditMode = true;
      } else {

      }
    });

    this.universityEnglishName = this.universityService.getEnglishName();
    this.universityChineseName = this.universityService.getChineseName();
    this.universityEnglishAddress = this.universityService.getEnglishAddress();
    this.universityChineseAddress = this.universityService.getChineseAddress();
    this.universityPhoneNumbers = this.universityService.getPhoneNumbers();
    this.universityFaxNumbers = this.universityService.getFaxNumbers();
    this.links = this.universityService.getLinks();

    for (let i = 0; i < 3; i++) {
      this.slides.push(this.articleService.getArticle(String(i)));
    }
  }

  get Locale() {
    return localStorage.getItem('locale');
  }

  ngOnInit() {
  }

  contactFinishEdit() {

  }

  linkFinishEdit() {

  }

  addNewSlide() {
    this.slideEditMode = true;
    this.selectedSlide = new Article;
  }

  slideFinishEdit() {
    this.slideEditMode = false;
  }

  slideCancelEdit() {
    this.slideEditMode = false;
  }
}
