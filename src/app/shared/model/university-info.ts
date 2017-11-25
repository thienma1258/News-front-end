export class UniversityInfo {
  englishName: string;
  chineseName: string;
  englishAddress: string;
  chineseAddress: string;
  phoneNumbers: string[];
  faxNumbers: string[];

  constructor() {
    this.englishName = '';
    this.chineseName = '';
    this.englishAddress = '';
    this.chineseAddress = '';
    this.phoneNumbers = [];
    this.faxNumbers = [];
  }
}
