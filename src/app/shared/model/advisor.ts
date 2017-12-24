import {AdvisorGroup} from '../enum/advisor-group.enum';

export class Advisor {
  id: string;
  englishName: string;
  chineseName: string;
  englishTitle: string;
  chineseTitle: string;
  englishBackground: string;
  chineseBackground: string;
  englishSpecialties: string;
  chineseSpecialties: string;
  englishOffice: string;
  chineseOffice: string;
  phone: string;
  email: string;
  facultyGroup: AdvisorGroup;
  facultyImageUrl: string;
  link: string;
  isDisplay: boolean;
  isDean: boolean;
}
