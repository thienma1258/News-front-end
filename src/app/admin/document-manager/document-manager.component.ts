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
  addnewfile(){
document.getElementById('Filenew').click();
  }
  uppfile(event){
const  file: File = event.srcElement.files[0];

 this.documentServices.addnewdocument(file).subscribe(data => {
  this.loaddata();
 });
  }

}
