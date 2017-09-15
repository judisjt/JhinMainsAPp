import { Component, OnInit, } from '@angular/core';
import {EmployeeService} from '../services/grabSummonerName';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css'],
  providers: [EmployeeService]
})
export class NewComponentComponent implements OnInit {
  employees = [];
  inputValue: string;
  private key: string;
  private url: string;
  constructor(private _employeeService: EmployeeService) {}
  ngOnInit() {}
  update(box: string) {
    this.inputValue = box;
    this.key = 'RGAPI-823cc599-f2cb-407e-bbb4-751298697998';
    this.url = 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/' + this.inputValue + '?api_key=' + this.key
    this._employeeService.getSummonerName(this.url)
      .subscribe(resEmployeeData => this.employees = resEmployeeData);
  }
}
