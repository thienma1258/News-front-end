import { Component, OnInit } from '@angular/core';
import {Article} from '../../../shared/interface/article';
import {Router} from "@angular/router";

@Component({
  selector: 'areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addNewArticle() {
    this.router.navigate(['/admin/news/addnew', {
      type: 'areas'
    }]);
  }
}
