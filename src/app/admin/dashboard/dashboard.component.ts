import {Component, OnInit} from '@angular/core';
import {Article} from '../../shared/model/article';
import {Event} from '../../shared/model/event';
import {ActivityLog} from '../../shared/model/activity-log';
import {ArticleService} from '../../shared/services/article.service';
import {EventService} from '../../shared/services/event.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public lineChartData: Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'View', lineTension: 0},
  ];
  public lineChartLabels: Array<any> = ['15/11/2017', '16/11/2017', '17/11/2017', '18/11/2017', '19/11/2017', '20/11/2017', '21/11/2017'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'transparent',
      borderColor: 'red',
      pointBackgroundColor: 'white',
      pointBorderColor: 'red',
      pointHoverBackgroundColor: 'red',
      pointHoverBorderColor: 'white'
    },
  ];
  public lineChartLegend = false;
  public lineChartType = 'line';

  private recentNews: Article[] = [];
  private recentEvents: Event[] = [];

  activityLogs: ActivityLog[] = [
    {
      user: 'Admin',
      date: '12:00 p.m - Nov 15 2017',
      activity: 'Log in'
    },
    {
      user: 'Admin',
      date: '12:00 p.m - Nov 16 2017',
      activity: 'Log out'
    },
    {
      user: 'Admin',
      date: '12:00 p.m - Nov 16 2017',
      activity: 'Log in'
    },
    {
      user: 'Admin',
      date: '12:00 p.m - Nov 17 2017',
      activity: 'Log in'
    },
    {
      user: 'Admin',
      date: '12:00 p.m - Nov 18 2017',
      activity: 'Log in'
    },
    {
      user: 'Admin',
      date: '12:00 p.m - Nov 19 2017',
      activity: 'Log in'
    },
    {
      user: 'Admin',
      date: '12:00 p.m - Nov 20 2017',
      activity: 'Log in'
    }
  ];

  constructor(private articleService: ArticleService, private eventService: EventService) {
  }

  ngOnInit() {
    this.articleService.getLatestNews().subscribe(
      data => {
        this.recentNews = data['content'];
      },
      err => {
        console.log(err);
      }
    );

    this.eventService.getUpcomingEvent().subscribe(
      data => {
        this.recentEvents = data['content'];
      },
      err => {
        console.log(err);
      }
    );
  }

}
