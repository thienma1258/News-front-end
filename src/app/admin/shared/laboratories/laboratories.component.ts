import { Component, OnInit } from '@angular/core';
import {LaboratoryServices} from '../../../shared/services/laboratory.service';
import {Laboratory} from '../../../shared/model/laboratory.model';
import {Advisor} from '../../../shared/model/advisor';
import {AdvisorService} from '../../../shared/services/advisor.service';
@Component({
  selector: 'laboratories',
  templateUrl: './laboratories.component.html',
  styleUrls: ['./laboratories.component.css']
})
export class LaboratoriesComponent implements OnInit {
  public laboratories: Laboratory[]= [];
  public isAddnew= false;
  public advisor: Advisor[]= [];
  public laboratory: any= {
    'englishTitle': '',
    'chineseTitle': '',
    'englishTeacherName': '',
    'chineseTeacherName': '',
    'englishResearch': '',
    'chineseResearch': ''
  };
  constructor(private laboratoryServices: LaboratoryServices,
    private Advisorservices: AdvisorService) { }

  ngOnInit() {
this.loaddata();
    this.Advisorservices.getAllAdvisors().subscribe(data => {
console.log(data);
this.advisor = data['content'];
console.log(this.advisor);
    });
  }
  changeisnotaddnew(){
this.isAddnew=false;
  }
  // tslint:disable-next-line:one-line
  loaddata(){
    this.laboratoryServices.getlaboratory().subscribe(data => {
      console.log(data);
      this.laboratories = data['content'];

    });
  }
  changestate(){
    // tslint:disable-next-line:no-unused-expression
    this.isAddnew === false ? this.isAddnew = true : '';
  }
  // tslint:disable-next-line:one-line
  addnew(){
    this.laboratoryServices.addnew(this.laboratory).subscribe(data => {
      if (data['content'] === true){
       this.loaddata();
       this.isAddnew = false;
      }
      console.log(data);
    });
  }
}
