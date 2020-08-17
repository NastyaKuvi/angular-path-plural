import { Component, OnInit } from '@angular/core';
import { IUserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'af-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.scss']
})
export class UserSettingsFormComponent implements OnInit {

  private _originalUserSettings: IUserSettings;
  public userSettings: IUserSettings;

  constructor() {
    this._originalUserSettings = {
      name: 'Anastasia',
      emailOffers: true,
      interfaceStyle: 'dark',
      subscriptionType: 'Annual',
      notes: 'lets play with form ha-ha-ha'
    };
    this.userSettings = {...this._originalUserSettings};
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log('on submit: ', form.valid);
  }

  onBlur(field: NgModel) {
    console.log('on blur: ', field.valid);
  }
}
