import { Component, OnInit } from '@angular/core';
import {Document} from '../../shared/model/document';
import {DocumentServices} from '../../shared/services/docuemnt.services';
@Component({
  selector: 'document-manager',
  templateUrl: './document-manager.component.html',
  styleUrls: ['./document-manager.component.css']
})
export class DocumentManagerComponent implements OnInit {

  constructor(private documentServices: DocumentServices) { }
  documents: Document[]= [];
  showdocuments: Document[]= []; '';
  documentspublishield: Document[]= [];

  ngOnInit() {
this.loaddata();
  }
  loaddata(){
    this.documentspublishield = [];

    this.documentServices.getalldocument().subscribe(data => {
      console.log(data);
      // tslint:disable-next-line:curly
      if (data['content'] == null)
        return;
      this.documents = data['content']['fileModel'];
      this.showdocuments = this.documents;
      console.log(data);
      // tslint:disable-next-line:no-shadowed-variable

      this.documents.forEach(dasta => {
        // tslint:disable-next-line:one-line
        if (dasta.status === true){
  this.documentspublishield.push(dasta);
        }
      });
    });


  }
  changestate(i){
    console.log('test' + i);
    // tslint:disable-next-line:one-line
    if (i === 0){
      this.showdocuments = this.documents;
    }
    // tslint:disable-next-line:one-line
    else if (i === 1){
      this.showdocuments = this.documentspublishield;
    }
  }
  // tslint:disable-next-line:one-line
  checkalltitle(){
    this.showdocuments.forEach(row => {

    });
  }
  // tslint:disable-next-line:one-line
  delete(id){
    return this.documentServices.deletedocument(id).subscribe(data => {
      this.loaddata();
    });
  }
  // tslint:disable-next-line:one-line
  addnewfile(){

document.getElementById('Filenew').click();
  }
  // tslint:disable-next-line:one-line
  uppfile(event){
    let status = false;
    const answer = confirm('Published or not');
    // tslint:disable-next-line:curly
    if (answer)
        status = true;
    const  file: File = event.srcElement.files[0];

   this.documentServices.addnewdocument(file, status).subscribe(data => {
   // tslint:disable-next-line:whitespace
   // tslint:disable-next-line:curly
   console.log(data);
     if (data['succeed'] === true){
      this.loaddata();
     }
     // tslint:disable-next-line:one-line
     else{
      alert('File doesn"t valid');
     }

       });

  }

}
