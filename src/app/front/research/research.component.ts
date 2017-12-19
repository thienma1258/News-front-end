import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ResearchServices} from '../../shared/services/research.services';
import {ArticleService} from '../../shared/services/article.service';
import {TranslateService, TranslationChangeEvent} from '@ngx-translate/core';
import {EmitterService} from '../../admin/shared/emitter.service';
import {Article} from '../../shared/model/article';

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
  public selectedTitleName;
  public isShowArticle = false;
  public article: Article = new Article();

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

      const id = params['id'];

      if (id) {
        this.articleservices.getArticlesById(id).subscribe(
          data => {
            if (data['content']) {
                this.isShowArticle = true;
                this.article = data['content'];
            }
          },
          err => {
            console.log(err);
          }
        );
      }

      console.log('id = ' + id);
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
