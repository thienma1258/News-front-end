import {Component, OnInit} from '@angular/core';
import {Article} from '../../shared/interface/article';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from "../../shared/services/article.service";

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.css']
})
export class AcademicComponent implements OnInit {
  parentRoute: string;
  parentRouteName: string;
  titles: any = [
    {
      'route': 'academic-information',
      'name': 'Academic Information'
    },
    {
      'route': 'student-graduate-and-undergraduate',
      'name': 'Student graduate and undergraduate',
    },
    {
      'route': 'teaching',
      'name': 'Teaching',
    },
    {
      'route': 'degree-requirement',
      'name': 'Degree requirement'
    }
  ];
  selectedTitle: string;
  article: Article;

  constructor(private route: ActivatedRoute, private articleService: ArticleService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.selectedTitle = params['title'];
      switch (this.selectedTitle) {
        case 'academic-information':
          this.selectedTitle = 'Academic Information';
          this.article = this.articleService.getArticle('3');
          break;
        case 'student-graduate-and-undergraduate':
          this.selectedTitle = 'Student Graduate & Undergraduate';
          this.article = this.articleService.getArticle('4');
          break;
        case 'teaching':
          this.selectedTitle = 'Teaching';
          this.article = this.articleService.getArticle('5');
          break;
        case 'degree-requirement':
          this.selectedTitle = 'Degree Requirement';
          this.article = this.articleService.getArticle('6');
          break;
      }
    });
    this.parentRoute = '/academic';
    this.parentRouteName = 'Academic & Admissions';
  }
}
