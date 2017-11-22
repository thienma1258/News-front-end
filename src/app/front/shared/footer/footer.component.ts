import {Component, OnInit} from '@angular/core';
import {UniversityLink} from '../../../shared/interface/university-link';
import {UniversityService} from '../../../shared/services/university.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private universityEnglishAddress: string;
  private universityPhoneNumbers: string[];
  private universityFaxNumbers: string[];
  private universityLinks: UniversityLink[];

  constructor(private universityService: UniversityService) {
  }

  ngOnInit() {
    this.universityEnglishAddress = this.universityService.getEnglishAddress();
    this.universityPhoneNumbers = this.universityService.getPhoneNumbers();
    this.universityFaxNumbers = this.universityService.getFaxNumbers();
    this.universityLinks = this.universityService.getLinks();
  }

}
