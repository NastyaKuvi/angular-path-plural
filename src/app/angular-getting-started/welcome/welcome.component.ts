import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gs-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeGSComponent {
  public pageTitle: string;

  constructor() {
    this.pageTitle = 'Welcome';
  }

}
