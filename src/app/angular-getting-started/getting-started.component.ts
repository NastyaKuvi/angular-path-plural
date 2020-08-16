import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent {
  pageTitle = 'Acme Product Management';

  constructor(
    private _activeRoute: ActivatedRoute,
    private _router: Router
  ) {

  }

  onWelcomeClick() {
    this._router.navigate(['getting-started/welcome']);
  }
}
