import {Component, OnInit} from '@angular/core';
import {UniversityLink} from '../../../shared/model/university-link';
import {UniversityService} from '../../../shared/services/university.service';
import {UniversityInfo} from '../../../shared/model/university-info';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private universityInfo: UniversityInfo;
  private universityLinks: UniversityLink[] = [];

  constructor(private universityService: UniversityService) {
  }

  get Locale() {
    return localStorage.getItem('locale');
  }

  ngOnInit() {
    this.universityInfo = new UniversityInfo();
    this.universityService.getUniversityInfo().subscribe(
      data => {
        this.universityInfo = data['content'];
      },
      err => {
        console.log(err);
      }
    );
    this.universityService.getLinks().subscribe(
      data => {
        this.universityLinks = data['content'];
        console.log(data['content']);
      },
      err => {
        console.log(err);
      }
    );
  }

}
