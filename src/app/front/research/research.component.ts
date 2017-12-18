import {Component, OnInit} from '@angular/core';
import {Article} from '../../shared/model/article';
import {ActivatedRoute} from '@angular/router';
import {topic} from '../../shared/model/research-news-models';
import {ResearchServices} from '../../shared/services/research.services';
import {ArticleService} from '../../shared/services/article.service';
import {TranslateService, TranslationChangeEvent} from '@ngx-translate/core';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {
  parentRoute: string;
  parentRouteName: string;
  public menu: any;
  public selectedTitle;
  public articles: Article[] = [];
  public topics: topic[] = [];

  constructor(private translate: TranslateService, private route: ActivatedRoute, private reserachservices: ResearchServices, private articleservices: ArticleService) {
  }

  get Locale() {
    return localStorage.getItem('locale');
  }

  createmenu() {
    this.menu = new Array<string>();
    this.menu.push();
    this.menu.push();
    this.menu.push();
    this.menu.push();
    this.menu.push('poster');
    // this.selectedtitle = this.menu[0];
  }

  ngOnInit() {
    this.translate.get(['Homepage.ResearchNews', 'Homepage.Laboratory', 'Homepage.ConferencesAndSeminars', 'Homepage.Poster']).subscribe(
      res => {
        console.log(res['Homepage.FacultyAdvisor']);
        this.menu = [
          {
            'route': 'research-news',
            'name': res['Homepage.ResearchNews']
          },
          {
            'route': 'laboratory',
            'name': res['Homepage.Laboratory']
          },
          {
            'route': 'conferences-and-seminars',
            'name': res['Homepage.ConferencesAndSeminars']
          },
          {
            'route': 'poster',
            'name': res['Homepage.Poster']
          }
        ];
      });
    this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
      this.translate.get(['Homepage.ResearchNews', 'Homepage.Laboratory', 'Homepage.ConferencesAndSeminars', 'Homepage.Poster']).subscribe(
        res => {
          this.menu = [
            {
              'route': 'research-news',
              'name': res['Homepage.ResearchNews']
            },
            {
              'route': 'laboratory',
              'name': res['Homepage.Laboratory']
            },
            {
              'route': 'conferences-and-seminars',
              'name': res['Homepage.ConferencesAndSeminars']
            },
            {
              'route': 'poster',
              'name': res['Homepage.Poster']
            }
          ];
        }
      );
    });
    this.route.params.subscribe(params => {
      this.selectedTitle = params['title'];
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
      for (const title of this.menu) {
        if (title.route === this.selectedTitle) {
          this.selectedTitle = title.name;
        }
      }
    });
    this.parentRoute = '/research';
    this.parentRouteName = 'Research';
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

  getArticle() {
    return;
  }

}
