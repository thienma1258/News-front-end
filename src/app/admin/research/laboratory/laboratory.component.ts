import { Component, OnInit } from '@angular/core';
import {Article} from '../../../shared/interface/article';
import {Router} from "@angular/router";

@Component({
  selector: 'laboratory',
  templateUrl: './laboratory.component.html',
  styleUrls: ['./laboratory.component.css']
})
export class LaboratoryComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
  }

  addNewArticle() {
    this.router.navigate(['/admin/research/addnew', {
      type: 'laboratory'
    }]);
  }
}
