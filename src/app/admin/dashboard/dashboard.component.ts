import {Component, OnInit} from '@angular/core';
import {Article} from '../../shared/interface/article';
import {Event} from '../../shared/interface/event';
import {ActivityLog} from "../../shared/interface/activity-log";

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

  previewRecentNews: Article[] = [
    {
      title: 'title1',
      imageUrls: ['001t.jpg'],
      previewContent: 'preview content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
      content: 'content 1',
      url: '',
      createdTime: 'Oct 28, 2017'
    },
    {
      title: 'title2',
      imageUrls: ['070.jpg'],
      previewContent: 'preview content 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
      content: 'content 2',
      url: '',
      createdTime: 'Oct 28, 2017'
    },
    {
      title: 'title3',
      imageUrls: ['077.jpg'],
      previewContent: 'preview content 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
      content: 'content 3',
      url: '',
      createdTime: 'Oct 28, 2017'
    },
  ];

  previewRecentEvent: Event[] = [
    {
      title: 'title1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla.',
      imageUrls: ['001t.jpg'],
      previewContent: 'preview content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      content: 'content 1 ',
      url: '',
      eventDate: 'Nov 20',
      createdTime: 'Oct 28, 2017'
    },
    {
      title: 'title1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla.',
      imageUrls: ['001t.jpg'],
      previewContent: 'preview content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      content: 'content 1 ',
      url: '',
      eventDate: 'Nov 20',
      createdTime: 'Oct 28, 2017'
    },
    {
      title: 'title1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla.',
      imageUrls: ['001t.jpg'],
      previewContent: 'preview content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      content: 'content 1 ',
      url: '',
      eventDate: 'Nov 20',
      createdTime: 'Oct 28, 2017'
    },
  ];

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

  constructor() {
  }

  ngOnInit() {
  }

}
