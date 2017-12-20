import {Component, OnInit} from '@angular/core';
import {Article} from '../../shared/model/article';
import {ActivatedRoute} from '@angular/router';
import {ArticleSize} from '../../shared/enum/article-size.enum';
import {topic} from '../../shared/model/research-news-models';
import {ResearchServices} from '../../shared/services/research.services';
import {ArticleService} from '../../shared/services/article.service';
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
  constructor(private route: ActivatedRoute, private reserachservices: ResearchServices, private articleservices: ArticleService) {
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


      if ( this.selectedTitle == 'research-news') {
        this.reserachservices.getresearchtopic().subscribe((data) => {
          console.log(data['content']);
          this.topics = data['content'];
        });
        this.articleservices.getArticles('ResearchNews').subscribe((data) => {
      if (data['succeed'])
      {
          this.articles = data['content'];
      }
        });
      }
      else if (this.selectedTitle == 'laboratory'){
        this.reserachservices.getlaboratorytopic().subscribe((data) => {
          console.log(data['content']);
          this.topics = data['content'];
        });
        this.articleservices.getArticles('laboratory').subscribe((data) => {
      if (data['succeed'])
      {
          this.articles = data['content'];
      }
        });
      }
      else if (this.selectedTitle == 'conferences-and-seminars'){
this.topics = null;
this.articleservices.getArticles('ConferencesAndSemminars').subscribe((data) => {
  if (data['succeed'])
  {
      this.articles = data['content'];
  }
    });
      }
      else if (this.selectedTitle == 'area'){
        this.topics = null;
        this.articleservices.getArticles('Area').subscribe((data) => {
          if (data['succeed'])
          {
              this.articles = data['content'];
          }
            });
      }
      else if (this.selectedTitle == 'poster'){
        this.topics = null;
        this.articleservices.getArticles('Poster').subscribe((data) => {
          if (data['succeed'])
          {
              this.articles = data['content'];
          }
            });
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

  clicktopic(i){
    // check if topic is click change state
    const researchtopics = new Array<string>();
   !this.topics[i].active  ? this.topics[i].active = true : this.topics[i].active = false;
   this.topics.forEach(row => {
 row.active ? researchtopics.push(row.id) : '';

   });
   if (researchtopics.length == 0){
    if (this.selectedTitle == 'Research News'){
      this.articleservices.getArticles('ResearchNews').subscribe((data) => {
        if (data['succeed'])
        {
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
   })
  //  console.log(researchtopics);

  }
  getArticle() {
    return ;
  }

}
