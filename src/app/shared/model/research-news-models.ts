export class topic{
	id:string;
	englishTitle: string;
  chineseTitle?: string;
  active: boolean;

  constructor() {
    this.id = '';
    this.englishTitle = '';
    this.chineseTitle = '';
   this.active = false;
  }
}
