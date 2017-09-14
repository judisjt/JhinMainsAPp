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
    this.key = 'RGAPI-a86403ef-5178-4611-9bb1-fa3400f77cce';
    this.url = 'https://na1.api.riotgames.com/lol/league/v3/positions/by-summoner/' + this.inputValue + '?api_key=' + this.key;
    this._employeeService.getRatio(this.url)
      .subscribe(resEmployeeData => this.employees = resEmployeeData);
  }
}
