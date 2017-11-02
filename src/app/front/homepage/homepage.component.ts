import {Component, OnInit} from '@angular/core';
import {Article} from '../shared/interface/article';
import {Event} from '../shared/interface/event';
import {ASSERT_IMAGES_URL} from '../../app.component';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  assertImagesUrl = ASSERT_IMAGES_URL;
  aboutArticle: Article = {
    title: 'title1',
    imageUrls: ['001t.jpg'],
    previewContent: 'preview content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi. Suspendisse volutpat ipsum eget nulla rutrum vehicula. Vestibulum a eros rhoncus, lacinia turpis quis, vehicula arcu. Cras in ligula rutrum, gravida lectus vitae, scelerisque purus. Maecenas nec libero eget enim eleifend mollis sit amet auctor dolor. In pulvinar laoreet neque, nec cursus purus dapibus fringilla.',
    content: 'content 1',
    url: '',
    createdTime: 'Oct 28, 2017'
  };

  highlightArticles: Article[] = [
    {
      title: 'title1',
      imageUrls: ['001t.jpg'],
      previewContent: 'preview content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi. Suspendisse volutpat ipsum eget nulla rutrum vehicula. Vestibulum a eros rhoncus, lacinia turpis quis, vehicula arcu. Cras in ligula rutrum, gravida lectus vitae, scelerisque purus. Maecenas nec libero eget enim eleifend mollis sit amet auctor dolor. In pulvinar laoreet neque, nec cursus purus dapibus fringilla.',
      content: 'content 1',
      url: '',
      createdTime: 'Oct 28, 2017'
    },
    {
      title: 'title2',
      imageUrls: ['070.jpg'],
      previewContent: 'preview content 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi. Suspendisse volutpat ipsum eget nulla rutrum vehicula. Vestibulum a eros rhoncus, lacinia turpis quis, vehicula arcu. Cras in ligula rutrum, gravida lectus vitae, scelerisque purus. Maecenas nec libero eget enim eleifend mollis sit amet auctor dolor. In pulvinar laoreet neque, nec cursus purus dapibus fringilla.',
      content: 'content 2',
      url: '',
      createdTime: 'Oct 28, 2017'
    },
    {
      title: 'title3',
      imageUrls: ['077.jpg'],
      previewContent: 'preview content 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi. Suspendisse volutpat ipsum eget nulla rutrum vehicula. Vestibulum a eros rhoncus, lacinia turpis quis, vehicula arcu. Cras in ligula rutrum, gravida lectus vitae, scelerisque purus. Maecenas nec libero eget enim eleifend mollis sit amet auctor dolor. In pulvinar laoreet neque, nec cursus purus dapibus fringilla.',
      content: 'content 3',
      url: '',
      createdTime: 'Oct 28, 2017'
    },
  ];

  latestArticles: Article[] = [
    {
      title: 'title1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla.',
      imageUrls: ['001t.jpg'],
      previewContent: 'preview content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi. Suspendisse volutpat ipsum eget nulla rutrum vehicula. Vestibulum a eros rhoncus, lacinia turpis quis, vehicula arcu. Cras in ligula rutrum, gravida lectus vitae, scelerisque purus. Maecenas nec libero eget enim eleifend mollis sit amet auctor dolor. In pulvinar laoreet neque, nec cursus purus dapibus fringilla.',
      content: 'content 1 ',
      url: '',
      createdTime: 'Oct 28, 2017'
    },
    {
      title: 'title2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla.',
      imageUrls: ['070.jpg'],
      previewContent: 'preview content 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi. Suspendisse volutpat ipsum eget nulla rutrum vehicula. Vestibulum a eros rhoncus, lacinia turpis quis, vehicula arcu. Cras in ligula rutrum, gravida lectus vitae, scelerisque purus. Maecenas nec libero eget enim eleifend mollis sit amet auctor dolor. In pulvinar laoreet neque, nec cursus purus dapibus fringilla.',
      content: 'content 2',
      url: '',
      createdTime: 'Oct 28, 2017'
    },
    {
      title: 'title3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla.',
      imageUrls: ['077.jpg'],
      previewContent: 'preview content 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi. Suspendisse volutpat ipsum eget nulla rutrum vehicula. Vestibulum a eros rhoncus, lacinia turpis quis, vehicula arcu. Cras in ligula rutrum, gravida lectus vitae, scelerisque purus. Maecenas nec libero eget enim eleifend mollis sit amet auctor dolor. In pulvinar laoreet neque, nec cursus purus dapibus fringilla.',
      content: 'content 3',
      url: '',
      createdTime: 'Oct 28, 2017'
    },
    {
      title: 'title4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla.',
      imageUrls: ['001.jpg'],
      previewContent: 'preview content 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi. Suspendisse volutpat ipsum eget nulla rutrum vehicula. Vestibulum a eros rhoncus, lacinia turpis quis, vehicula arcu. Cras in ligula rutrum, gravida lectus vitae, scelerisque purus. Maecenas nec libero eget enim eleifend mollis sit amet auctor dolor. In pulvinar laoreet neque, nec cursus purus dapibus fringilla.',
      content: 'content 4',
      url: '',
      createdTime: 'Oct 28, 2017'
    }
  ];

  upcomingEvent: Event[] = [
    {
      title: 'title1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla.',
      imageUrls: ['001t.jpg'],
      previewContent: 'preview content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat.',
      content: 'content 1 ',
      url: '',
      eventDate: 'Nov 20',
      createdTime: 'Oct 28, 2017'
    },
    {
      title: 'title1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla.',
      imageUrls: ['001t.jpg'],
      previewContent: 'preview content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat.',
      content: 'content 1 ',
      url: '',
      eventDate: 'Nov 20',
      createdTime: 'Oct 28, 2017'
    },
    {
      title: 'title1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla.',
      imageUrls: ['001t.jpg'],
      previewContent: 'preview content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat.',
      content: 'content 1 ',
      url: '',
      eventDate: 'Nov 20',
      createdTime: 'Oct 28, 2017'
    },
  ];

  admissionsArticle: Article = {
    title: 'title1',
    imageUrls: ['001t.jpg'],
    previewContent: 'preview content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi. Suspendisse volutpat ipsum eget nulla rutrum vehicula. Vestibulum a eros rhoncus, lacinia turpis quis, vehicula arcu. Cras in ligula rutrum, gravida lectus vitae, scelerisque purus. Maecenas nec libero eget enim eleifend mollis sit amet auctor dolor. In pulvinar laoreet neque, nec cursus purus dapibus fringilla.',
    content: 'content 1',
    url: '',
    createdTime: 'Oct 28, 2017'
  };

  academicsArticle: Article = {
    title: 'title2',
    imageUrls: ['070.jpg'],
    previewContent: 'preview content 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi. Suspendisse volutpat ipsum eget nulla rutrum vehicula. Vestibulum a eros rhoncus, lacinia turpis quis, vehicula arcu. Cras in ligula rutrum, gravida lectus vitae, scelerisque purus. Maecenas nec libero eget enim eleifend mollis sit amet auctor dolor. In pulvinar laoreet neque, nec cursus purus dapibus fringilla.',
    content: 'content 2',
    url: '',
    createdTime: 'Oct 28, 2017'
  };

  researchArticle: Article = {
    title: 'title3',
    imageUrls: ['077.jpg'],
    previewContent: 'preview content 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi. Suspendisse volutpat ipsum eget nulla rutrum vehicula. Vestibulum a eros rhoncus, lacinia turpis quis, vehicula arcu. Cras in ligula rutrum, gravida lectus vitae, scelerisque purus. Maecenas nec libero eget enim eleifend mollis sit amet auctor dolor. In pulvinar laoreet neque, nec cursus purus dapibus fringilla.',
    content: 'content 3',
    url: '',
    createdTime: 'Oct 28, 2017'
  };

  studentLifeArticle: Article = {
    title: 'title4',
    imageUrls: ['001.jpg'],
    previewContent: 'preview content 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi. Suspendisse volutpat ipsum eget nulla rutrum vehicula. Vestibulum a eros rhoncus, lacinia turpis quis, vehicula arcu. Cras in ligula rutrum, gravida lectus vitae, scelerisque purus. Maecenas nec libero eget enim eleifend mollis sit amet auctor dolor. In pulvinar laoreet neque, nec cursus purus dapibus fringilla.',
    content: 'content 3',
    url: '',
    createdTime: 'Oct 28, 2017'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
