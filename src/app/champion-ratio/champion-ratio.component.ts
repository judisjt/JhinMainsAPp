import { Component, OnInit } from '@angular/core';
import {EmployeeService3} from '../services/grabChampionRatio';

@Component({
  selector: 'app-champion-ratio',
  templateUrl: './champion-ratio.component.html',
  styleUrls: ['./champion-ratio.component.css'],
  providers: [EmployeeService3]
})
export class ChampionRatioComponent implements OnInit {
  employees = [];
  inputValue: string;
  private key: string;
  private url: string;
  constructor(private _employeeService: EmployeeService3) {}
  ngOnInit() {}
  update(box: string) {
    this.inputValue = box;
    this.key = 'RGAPI-823cc599-f2cb-407e-bbb4-751298697998';
    this.url = 'https://na1.api.riotgames.com/lol/league/v3/positions/by-summoner/' + this.inputValue + '?api_key=' + this.key;
    this._employeeService.getRatio(this.url)
      .subscribe(resEmployeeData => this.employees = resEmployeeData);
  }
}
