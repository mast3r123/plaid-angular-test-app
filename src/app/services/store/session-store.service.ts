import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PlaidOnSuccessArgs } from 'ngx-plaid-link/lib/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SessionStoreService {

  // reference - https://dev.to/avatsaev/simple-state-management-in-angular-with-only-services-and-rxjs-41p8

  // tslint:disable-next-line:variable-name
  private readonly _userDetails = new BehaviorSubject<PlaidOnSuccessArgs>(null);

  // Expose the observable$ part of the _integrationTokens subject (read only stream)
  readonly userDetails$ = this._userDetails.asObservable();

  constructor() { }

  // @ts-ignore
  get userDetails(): PlaidOnSuccessArgs {
    return this._userDetails.getValue();
  }

  // @ts-ignore
  private set userDetails(val: PlaidOnSuccessArgs) {
    this._userDetails.next(val);
  }

  public setUserDetails(val: PlaidOnSuccessArgs) {
    this.userDetails = val;
  }
}
