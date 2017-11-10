import {Component, OnInit} from '@angular/core';
import {Article} from '../shared/interface/article';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  parentRoute: string;
  parentRouteName: string;
  public menu: string[];
  public selectedtitle;
  public articles: Article[];

  constructor() {
    this.articles = new Array<Article>();
    this.articles.push(this.getarticle());
    this.articles.push(this.getarticle());
    this.articles.push(this.getarticle());
  }

  ngOnInit() {
    this.parentRoute = '/news';
    this.parentRouteName = 'News';
    this.createmenu();
  }

  createmenu() {
    this.menu = new Array<string>();
    this.menu.push('Department News');
    this.menu.push('Course News');
    this.menu.push('Event');
    this.menu.push('School leadership');
    this.menu.push('Calendar');
    this.selectedtitle = this.menu[0];
  }

  getarticle() {

    return {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante\n' +
      '  dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce\n' +
      '  nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti\n' +
      '  sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed\n' +
      '  dignissim lacinia nunc.\n' +
      '  e\n' +
      '  Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis\n' +
      '  tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis,\n' +
      '  luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper\n' +
      '  vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora\n' +
      '  torquent per conubia nostra, per inceptos himenaeos. Nam nec ante.\n' +
      '\n' +
      '  Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla\n' +
      '  facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien.\n' +
      '  Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus\n' +
      '  luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget\n' +
      '  diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia\n' +
      '  molestie dui.\n' +
      '\n' +
      '  Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede\n' +
      '  facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada\n' +
      '  tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla\n' +
      '  facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam.\n' +
      '\n' +
      '  Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero\n' +
      '  eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut\n' +
      '  orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci. Ut eu diam at pede\n' +
      '  suscipit sodales. Aenean lectus elit, fermentum non, convallis id, sagittis at, neque. Nullam mauris orci,\n' +
      '  aliquet et, iaculis et, viverra vitae, ligula. Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet\n' +
      '  mollis lectus. Vivamus consectetuer risus et tortor.',
      previewContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrls: ['./assets/images/NCNU_06020.jpg'],
      url: '',
      createdTime: 'ajsklfdj',
    };
  }

}
