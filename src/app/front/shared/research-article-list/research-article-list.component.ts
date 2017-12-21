import {Component, Input, OnInit} from '@angular/core';
import {ArticleService} from '../../../shared/services/article.service';
import {ResearchServices} from '../../../shared/services/research.services';
import {topic} from '../../../shared/model/research-news-models';
import {Article} from '../../../shared/model/article';
import {EmitterService} from '../../../admin/shared/emitter.service';

@Component({
  selector: 'research-article-list',
  templateUrl: './research-article-list.component.html',
  styleUrls: ['./research-article-list.component.css']
})
export class ResearchArticleListComponent implements OnInit {
  @Input() selectedTitle: string;

  articles: Article[] = [];
  topics: topic[] = [];

  routeEmitter = EmitterService.get('RouteChanged');

  constructor(private reserachservices: ResearchServices, private articleservices: ArticleService) {
  }

  ngOnInit() {
    this.routeEmitter.subscribe(msg => {
      this.selectedTitle = msg;
      this.articles = [];

      if (this.selectedTitle === 'research-news') {
        this.articleservices.getArticles('ResearchNews').subscribe((data) => {
          if (data['succeed']) {
            this.articles = data['content'];
          }
        });
      } else if (this.selectedTitle === 'laboratory') {
        this.articleservices.getArticles('laboratory').subscribe((data) => {
          if (data['succeed']) {
            this.articles = data['content'];
          }
        });
      }
    });
    console.log(this.selectedTitle);
    if (this.selectedTitle == 'research-news') {
      this.reserachservices.getresearchtopic().subscribe((data) => {
        console.log(data['content']);
        this.topics = data['content'];
      });
      this.articleservices.getArticles('ResearchNews').subscribe((data) => {
        if (data['succeed']) {
          this.articles = data['content'];
        }
      });
    }
    else if (this.selectedTitle == 'laboratory') {
      this.reserachservices.getlaboratorytopic().subscribe((data) => {
        console.log(data['content']);
        this.topics = data['content'];
      });
      this.articleservices.getArticles('laboratory').subscribe((data) => {
        if (data['succeed']) {
          this.articles = data['content'];
        }
      });
    }
    else if (this.selectedTitle == 'conferences-and-seminars') {

    }
    else if (this.selectedTitle == 'area') {

    }
    else if (this.selectedTitle == 'poster') {

    }
  }

  clicktopic(i) {
    // check if topic is click change state
    const researchtopics = new Array<string>();
    !this.topics[i].active ? this.topics[i].active = true : this.topics[i].active = false;
    this.topics.forEach(row => {
      row.active ? researchtopics.push(row.id) : '';

    });
    if (researchtopics.length == 0) {
      if (this.selectedTitle == 'Research News') {
        this.articleservices.getArticles('ResearchNews').subscribe((data) => {
          if (data['succeed']) {
            this.articles = data['content'];
          }
        });
      }
      return;
    }
    //  need something to stoping next acting while filter;
    this.reserachservices.getarticlebytopics(researchtopics).subscribe(data => {
      console.log(data);
      this.articles = data['content'];
    });
    //  console.log(researchtopics);
  }
}
