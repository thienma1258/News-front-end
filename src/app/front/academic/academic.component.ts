import {Component, OnInit} from '@angular/core';
import {Article} from '../shared/interface/article';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.css']
})
export class AcademicComponent implements OnInit {
  parentRoute: string;
  parentRouteName: string;
  titles: any;
  selectedTitle: string;
  article: Article = {
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

  constructor(private route: ActivatedRoute){
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.selectedTitle = params['title'];
    });
    this.parentRoute = '/academic';
    this.parentRouteName = 'Academic & Admissions';
    this.titles = [
      {
        'route': 'academic-information',
        'name': 'Academic Information'
      },
      {
        'route':'student-graduate-and-undergraduate',
        'name': 'Student graduate and undergraduate',
      },
      {
        'route':'teaching',
        'name': 'Teaching',
      },
      {
        'route': 'degree-requirement',
        'name': 'Degree requirement'
      }
    ];
    this.selectedTitle = this.titles[0];
  }

}
