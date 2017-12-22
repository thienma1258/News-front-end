import {Component, Input, OnInit} from '@angular/core';
import {Advisor} from '../../../shared/model/advisor';
import {ArticleService} from '../../../shared/services/article.service';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {AdvisorService} from '../../../shared/services/advisor.service';
import {AdvisorGroup} from '../../../shared/enum/advisor-group.enum';
import {EmitterService} from "../../../admin/shared/emitter.service";

@Component({
  selector: 'advisor-infomation',
  templateUrl: './advisor-information.component.html',
  styleUrls: ['./advisor-information.component.css']
})

export class AdvisorInfomationComponent implements OnInit {
  @Input() advisor: Advisor;

  selectedImageUrlPath: SafeUrl;

  public advisorEmitter = EmitterService.get('RemoveAdvisor');
  public addDeanEmitter = EmitterService.get('AddDean');

  classGroup: string;

  constructor(private articleService: ArticleService, private sanitizer: DomSanitizer,
              private advisorService: AdvisorService) {
  }

  get Locale() {
    return localStorage.getItem('locale');
  }

  ngOnInit() {
    if (this.advisor.isDean) {
      this.classGroup = 'head-group';
    } else {
      switch (this.advisor.facultyGroup) {
        case AdvisorGroup.Head:
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
    }
    this.selectedImageUrlPath = this.advisor.facultyImageUrl;
  }
}
