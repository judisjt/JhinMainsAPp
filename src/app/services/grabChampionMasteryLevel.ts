import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService2 {
  constructor(private _http: Http) {}

  /**
   *
   * @returns {Observable<any>}
   */
  getMasteryLevel(url: string) {
    return this._http.get(url)
      .map(( response: Response ) => response.json());
  }
}
