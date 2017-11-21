import { Component, OnInit } from '@angular/core';
import {Article} from "../../shared/interface/article";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  contactName = 'National Chi Nan University - Department of Electrical Engineering';
  contactAddress = '(545) Daxue Rd, Puli Township, Nantou Country 545, Taiwan (R.O.C)';
  contactPhones: string[] = [
    '(049) 2910960-4101',
    '(049) 2910960-4102',
    '(049) 2910960-4103'
  ];
  contactFax = '(049) 2917810';
  link = [
    {
      'text': 'NCNU Home',
      'url': 'http://en.ncnu.edu.tw'
    },
    {
      'text': 'NCNU Email Login',
      'url': 'http://en.ncnu.edu.tw'
    },
    {
      'text': 'NCNU Student Web',
      'url': 'http://en.ncnu.edu.tw'
    },
    {
      'text': 'NCNU Fanpage Facebook',
      'url': 'http://en.ncnu.edu.tw'
    },
    {
      'text': 'Alumni',
      'url': 'http://en.ncnu.edu.tw'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
