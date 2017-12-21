import { Component, OnInit } from '@angular/core';
import {LaboratoryServices} from '../../../shared/services/laboratory.service';
import {Laboratory} from '../../../shared/model/laboratory.model';
@Component({
  selector: 'laboratories',
  templateUrl: './laboratories.component.html',
  styleUrls: ['./laboratories.component.css']
})
export class LaboratoriesComponent implements OnInit {
  public laboratories: Laboratory[]= [];
  constructor(private laboratoryServices: LaboratoryServices) { }

  ngOnInit() {
    this.laboratoryServices.getlaboratory().subscribe(data => {
      console.log(data);
      this.laboratories = data['content'];

    });
  }

}
