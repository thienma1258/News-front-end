import {Injectable} from '@angular/core';
import {UniversityLink} from '../interface/university-link';

@Injectable()
export class UniversityService {
  private universityEnglishName: string;
  private universityChineseName: string;
  private universityEnglishAddress: string;
  private universityChineseAddress: string;
  private universityPhoneNumber: string[];
  private universityFaxNumber: string[];
  private universityLinks: UniversityLink[];

  constructor() {
    this.universityEnglishName = 'National Chi Nan University - Department of Electrical Engineering';
    this.universityChineseName = '國立暨南國際大學 - 電機工程學系';
    this.universityEnglishAddress = '(545)Daxue Rd, Puli Township, Nantou Country 545, Taiwan (R.O.C)';
    this.universityChineseAddress = '(545)Daxue Rd, Puli Township, Nantou Country 545, Taiwan (R.O.C)';
    this.universityPhoneNumber = [
      '(049) 2910960-4101',
      '(049) 2910960-4102',
      '(049) 2910960-4103'
    ];
    this.universityFaxNumber = [
      '(049) 2917810'
    ];
    this.universityLinks = [
      {
        'name': 'NCNU Home',
        'url': 'http://en.ncnu.edu.tw/'
      },
      {
        'name': 'NCNU Email Login',
        'url': 'http://cloudmail.ncnu.edu.tw/'
      },
      {
        'name': 'NCNU Student Web',
        'url': 'http://studentweb.ncnu.edu.tw/'
      },
      {
        'name': 'Fanpage Facebook NCNU EED',
        'url': 'https://www.facebook.com/NCNUEE'
      },
      {
        'name': 'EE Alumni',
        'url': 'https://sites.google.com/mail.ncnu.edu.tw/alumniee/%E9%A6%96%E9%A0%81home?authuser=1'
      }
    ];
  }

  getEnglishName() {
    return this.universityEnglishName;
  }

  getChineseName() {
    return this.universityChineseName;
  }

  getEnglishAddress() {
    return this.universityEnglishAddress;
  }

  getChineseAddress() {
    return this.universityChineseAddress;
  }

  getPhoneNumbers() {
    return this.universityPhoneNumber;
  }

  getFaxNumbers() {
    return this.universityFaxNumber;
  }

  getLinks() {
    return this.universityLinks;
  }

}
