import {Injectable} from '@angular/core';
import {UniversityLink} from '../model/university-link';
import {UniversityInfo} from '../model/university-info';
import {Http} from '@angular/http';
import {AuthService} from '../../admin/shared/auth.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UniversityService {
  private universityInfo: UniversityInfo = undefined;
  // private universityEnglishName: string;
  // private universityChineseName: string;
  // private universityEnglishAddress: string;
  // private universityChineseAddress: string;
  // private universityPhoneNumber: string[];
  // private universityFaxNumber: string[];
  private universityLinks: UniversityLink[];
  private getContactUrl = '/contact/get';
  private getLinkUrl = '/link/get';

  constructor(private http: HttpClient, private authService: AuthService) {

    // this.universityEnglishName = 'National Chi Nan University - Department of Electrical Engineering';
    // this.universityChineseName = '國立暨南國際大學 - 電機工程學系';
    // this.universityEnglishAddress = '(545)Daxue Rd, Puli Township, Nantou Country 545, Taiwan (R.O.C)';
    // this.universityChineseAddress = '(545)Daxue Rd, Puli Township, Nantou Country 545, Taiwan (R.O.C)';
    // this.universityPhoneNumber = [
    //   '(049) 2910960-4101',
    //   '(049) 2910960-4102',
    //   '(049) 2910960-4103'
    // ];
    // this.universityFaxNumber = [
    //   '(049) 2917810'
    // ];
    // this.universityLinks = [
    //   {
    //     'englishName': 'NCNU Home',
    //     'url': 'http://en.ncnu.edu.tw/'
    //   },
    //   {
    //     'englishName': 'NCNU Email Login',
    //     'url': 'http://cloudmail.ncnu.edu.tw/'
    //   },
    //   {
    //     'englishName': 'NCNU Student Web',
    //     'url': 'http://studentweb.ncnu.edu.tw/'
    //   },
    //   {
    //     'englishName': 'Fanpage Facebook NCNU EED',
    //     'url': 'https://www.facebook.com/NCNUEE'
    //   },
    //   {
    //     'englishName': 'EE Alumni',
    //     'url': 'https://sites.google.com/mail.ncnu.edu.tw/alumniee/%E9%A6%96%E9%A0%81home?authuser=1'
    //   }
    // ];
  }

  getUniversityInfo() {
    const url = this.authService.apiUrl + this.getContactUrl;
    const options = this.authService.getHeader();

    return this.http.get<UniversityInfo>(url);
  }

  getLinks() {
    const url = this.authService.apiUrl + this.getLinkUrl;
    const options = this.authService.getHeader();

    return this.http.get<UniversityLink[]>(url);
  }

}
