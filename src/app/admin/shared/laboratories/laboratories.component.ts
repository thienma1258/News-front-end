import {Component, OnInit} from '@angular/core';
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
  public laboratories: Laboratory[] = [];
  public isAddNew = false;
  public advisor: Advisor[] = [];
  public newLaboratory: Laboratory = new Laboratory();

  editorLanguage = '中文';
  editorLocale = 'en';

  constructor(private laboratoryServices: LaboratoryServices,
              private Advisorservices: AdvisorService) {
  }

  get Locale() {
    return localStorage.getItem('locale');
  }

  switchEditorLanguage() {
    this.editorLanguage = this.editorLanguage === 'English' ? '中文' : 'English';
    this.editorLocale = this.editorLocale === 'en' ? 'zh-tw' : 'en';
  }

  ngOnInit() {
    this.laboratoryServices.getLaboratory().subscribe(data => {
      this.laboratories = data['content'];
    });
    this.Advisorservices.getAllAdvisors().subscribe(data => {
      this.advisor = data['content'];
    });
  }

  addNewLab() {
    // tslint:disable-next-line:no-unused-expression
    this.isAddNew = true;
  }

  removeLab(lab: Laboratory) {
    this.laboratoryServices.removeLaboratory(lab.id).subscribe(
      data => {
        this.laboratories.splice(this.laboratories.indexOf(lab), 1);
      },
      err => {
        console.log(err);
      }
    );
  }

  // tslint:disable-next-line:one-line
  done() {
    this.laboratoryServices.addLaboratory(this.newLaboratory).subscribe(
      data => {
        if (data['content'] === true) {
          this.isAddNew = false;
          this.laboratories.push(this.newLaboratory);
        }
        console.log(data);
      });
  }
}
