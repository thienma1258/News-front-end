import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ResearchServices} from '../../shared/services/research.services';
import {ArticleService} from '../../shared/services/article.service';
import {TranslateService, TranslationChangeEvent} from '@ngx-translate/core';
import {EmitterService} from '../../admin/shared/emitter.service';
import {Article} from '../../shared/model/article';
import {ArticleType} from '../../shared/enum/article-type.enum';
// tslint:disable-next-line:import-spacing
import {topic} from  '../../shared/model/research-news-models';
@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {
  parentRoute: string;
  parentRouteName: string;
  // tslint:disable-next-line:whitespace
  currentroute:string;
  public menu: any = [
    {
      'route': 'research-news',
      'name': 'Research News'
    },
    {
      'route': 'laboratory',
      'name': 'Laboratory'
    },
    {
      'route': 'conferences-and-seminars',
      'name': 'Conferences & Seminars'
    },
    {
      'route': 'area',
      'name': 'Area'
    },
    {
      'route': 'poster',
      'name': 'Poster'
    }
  ];
  public selectedTitle;
  public articles: Article[] = [];
  public topics: topic[] = [];
  public article: Article;

  public selectedTitleName;
  public isShowArticle = false;


  routeEmitter = EmitterService.get('RouteChanged');

  constructor(private translate: TranslateService, private route: ActivatedRoute,
              private reserachservices: ResearchServices, private articleservices: ArticleService) {
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

      this.currentroute = this.selectedTitle;
      // tslint:disable-next-line:one-line
      if (params['id'] !== undefined){

    this.articleservices.getArticlesById(params['id']).subscribe(data => {
      this.article = data['content'];

    });

        return;
      }


      if ( this.selectedTitle === 'research-news') {
        this.reserachservices.getresearchtopic().subscribe((data) => {
          console.log(data['content']);
          this.topics = data['content'];
        });
        this.articleservices.getArticles(String(ArticleType.ResearchNews)).subscribe((data) => {
      if (data['succeed'])
      // tslint:disable-next-line:one-line
      {
          this.articles = data['content'];
      }
        });
      }
      // tslint:disable-next-line:one-line
      else if (this.selectedTitle === 'laboratory'){
        this.reserachservices.getlaboratorytopic().subscribe((data) => {
          console.log(data['content']);
          this.topics = data['content'];
        });
        this.articleservices.getArticles(String(ArticleType.Laboratory)).subscribe((data) => {
      if (data['succeed'])
      // tslint:disable-next-line:one-line
      {
          this.articles = data['content'];
      }
        });
      }
      // tslint:disable-next-line:one-line
      else if (this.selectedTitle === 'conferences-and-seminars'){
  this.topics = null;
  this.articleservices.getArticles((String(ArticleType.ConferencesAndSemminars))).subscribe((data) => {
  if (data['succeed'])
  // tslint:disable-next-line:one-line
  {
      this.articles = data['content'];
  }
    });
      }
      // tslint:disable-next-line:one-line
      else if (this.selectedTitle === 'area'){
        this.topics = null;
        this.articleservices.getArticles((String(ArticleType.Area))).subscribe((data) => {
          if (data['succeed'])
          {
              this.articles = data['content'];
          }
            });
      }
      // tslint:disable-next-line:one-line
      else if (this.selectedTitle === 'poster'){
        this.topics = null;
        this.articleservices.getArticles((String(ArticleType.Poster))).subscribe((data) => {
          if (data['succeed'])
          // tslint:disable-next-line:one-line
          {
              this.articles = data['content'];
          }
            });
      }

      this.routeEmitter.emit(this.selectedTitle);

      for (const title of this.menu) {
        if (title.route === this.selectedTitle) {
          this.selectedTitleName = title.name;
        }
      }
    });
    this.parentRoute = '/research';
    this.parentRouteName = 'Research';
  }

  getArticle() {
    return;
  }

}
