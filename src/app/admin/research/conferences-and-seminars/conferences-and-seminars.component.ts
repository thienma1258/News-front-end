import {Component, OnInit} from '@angular/core';
import {Article} from '../../../shared/model/article';
import {Router} from '@angular/router';
import {ArticleService} from '../../../shared/services/article.service';
import {ArticleType} from '../../../shared/enum/article-type.enum';

@Component({
  selector: 'conferences-and-seminars',
  templateUrl: './conferences-and-seminars.component.html',
  styleUrls: ['./conferences-and-seminars.component.css']
})
export class ConferencesAndSeminarsComponent implements OnInit {
  public articles: Article[] = [];

  constructor(public router: Router, public articleService: ArticleService) {
  }

  ngOnInit() {
    this.articleService.getArticles(String(ArticleType.ConferencesAndSemminars)).subscribe(
      data => {
        this.articles = data['content'];
      },
      err => {
        console.log(err);
      }
    );
  }

  get Locale() {
    return localStorage.getItem('locale');
  }

  addNewArticle() {
    this.router.navigate(['/admin/research/done', {
      type: 'conferences-and-seminars'
    }]);
  }
}
