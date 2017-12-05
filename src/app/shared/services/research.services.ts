import {Injectable} from '@angular/core';

import {AuthService} from '../../admin/shared/auth.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ResearchServices {
reseachtopicapi="/research/get";
laboratorytopic="/laboratory/get";


constructor(private http: HttpClient, private authService: AuthService)
{

}
getresearchtopic(){
	const url = this.authService.apiUrl +this.reseachtopicapi;
	return this.http.get(url);
}
getlaboratorytopic(){
	const url = this.authService.apiUrl +this.laboratorytopic;
	return this.http.get(url);
}
}
