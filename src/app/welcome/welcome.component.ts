import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  public pageTitle: string;

  constructor() {
    this.pageTitle = 'Welcome';
  }

}
