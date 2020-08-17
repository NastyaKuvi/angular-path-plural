import { Component, OnInit } from '@angular/core';
import { IUserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'af-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.scss']
})
export class UserSettingsFormComponent implements OnInit {

  private _originalUserSettings: IUserSettings;
  public userSettings: IUserSettings;
  public postError: boolean;
  public postErrorMessage: string;

  public subscritionTypes: Observable<Array<string>>;

  constructor(
    private _dataService: DataService
  ) {
    this.postError = false;
    this.postErrorMessage = '';
    this._originalUserSettings = {
      name: null,
      emailOffers: null,
      interfaceStyle: null,
      subscriptionType: null,
      notes: null
    };
    this.userSettings = {...this._originalUserSettings};
  }

  ngOnInit(): void {
    this.subscritionTypes = this._dataService.getSubscriptionTypes();
  }

  onSubmit(form: NgForm) {
    console.log('on submit: ', form.valid);
    if (form.valid) {
      this._dataService.postUserSettingForm(this.userSettings).subscribe(
        result => console.log('Success:', result),
        error => this._onHttpError(error),
        
      )
    } else {
      this.postError = true;
      this.postErrorMessage = 'please fix the above errors';
    }
  }

  onBlur(field: NgModel) {
    console.log('on blur: ', field.valid);
  }

  private _onHttpError(error: any) {
    console.log('error: ', error);
    this.postError = true;
    this.postErrorMessage = error.error.errorMessage;
  }
}
