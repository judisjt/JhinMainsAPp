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
    this.key = 'RGAPI-a86403ef-5178-4611-9bb1-fa3400f77cce';
    this.url = 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/' + this.inputValue + '?api_key=' + this.key
    this._employeeService.getSummonerName(this.url)
      .subscribe(resEmployeeData => this.employees = resEmployeeData);
  }
}
