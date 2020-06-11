import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  title = "favorite Links";
  FavLinks = ['https://education.launchcode.org/intro-to-professional-web-dev/chapters/angular-lsn1/exercises.html', 
                      'https://app.slack.com/client/T012GMVC95Z/C0121PJ587R']
  constructor() { }

  ngOnInit() {
  }

}
