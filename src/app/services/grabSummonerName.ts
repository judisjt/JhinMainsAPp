import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
  constructor(private _http: Http) {}

  /**
   *
   * @returns {Observable<any>}
*/
  getSummonerName(url: string) {
     return this._http.get(url)
      .map(( response: Response ) => response.json());
  }
}
