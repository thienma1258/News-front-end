import {Component, OnInit} from '@angular/core';
import {Article} from '../../../shared/interface/article';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'research-news',
  templateUrl: './research-news.component.html',
  styleUrls: ['./research-news.component.css']
})
export class ResearchNewsComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  addNewArticle() {
    this.router.navigate(['/admin/research/addnew', {
      type: 'research-news'
    }]);
  }
}
