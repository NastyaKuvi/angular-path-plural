import { IUserSettings } from './user-settings';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private _http: HttpClient
  ) {
  }

  postUserSettingForm(userSettings: IUserSettings): Observable<IUserSettings> {
    return this._http.post<IUserSettings>(
      'https://putsreq.com/JFzcZaSYYWG01az9bdMN', userSettings)
  }

  getSubscriptionTypes(): Observable<Array<string>> {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }
}
