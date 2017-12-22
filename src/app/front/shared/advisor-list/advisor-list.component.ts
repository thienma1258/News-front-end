import {Component, Input, OnInit} from '@angular/core';
import {Advisor} from '../../../shared/model/advisor';
import {AdvisorService} from '../../../shared/services/advisor.service';
import {AdvisorGroup} from '../../../shared/enum/advisor-group.enum';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {ArticleService} from '../../../shared/services/article.service';
import {EmitterService} from "../../../admin/shared/emitter.service";

@Component({
  selector: 'advisor-list',
  templateUrl: './advisor-list.component.html',
  styleUrls: ['./advisor-list.component.css']
})
export class AdvisorListComponent implements OnInit {
  @Input() group: AdvisorGroup;

  public advisorEmitter = EmitterService.get('RemoveAdvisor');
  public addDeanEmitter = EmitterService.get('AddDean');

  selectedImageUrlPath: SafeUrl;

  classGroup: string;

  public advisors: Advisor[] = [];
  private newAdvisor: Advisor = new Advisor();

  constructor(private articleService: ArticleService, private sanitizer: DomSanitizer, public advisorService: AdvisorService) {
  }

  get Locale() {
    return localStorage.getItem('locale');
  }

  ngOnInit() {
    switch (this.group) {
      case AdvisorGroup.All:
        break;
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
}
