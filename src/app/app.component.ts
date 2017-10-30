import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  langue;

  ngOnInit() {
    sessionStorage.getItem('lan') == null ? sessionStorage.setItem('lan', 'en') : '';
    this.langue = sessionStorage.getItem('lan');
  }

  OnChangeLangue($event) {
    console.log($event.target.value);
    sessionStorage.setItem('lan', $event.target.value);
    window.location.reload();
  }
}
