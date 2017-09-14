import {Component, OnInit} from '@angular/core';
import {EmployeeService2} from '../services/grabChampionMasteryLevel';

@Component({
  selector: 'app-jhin-score',
  templateUrl: './jhin-score.component.html',
  styleUrls: ['./jhin-score.component.css'],
  providers: [EmployeeService2],
})
export class JhinScoreComponent implements OnInit {
  employees = [];
  inputValue: string;
  private key: string;
  private url: string;
  constructor(private _employeeService: EmployeeService2) {}
  ngOnInit() {}
  update(box: string) {
    this.inputValue = box;
    this.key = 'RGAPI-a86403ef-5178-4611-9bb1-fa3400f77cce';
    this.url = 'https://na1.api.riotgames.com/lol/champion-mastery/v3/champion-masteries/by-summoner/' + this.inputValue + '/by-champion/202?api_key=' + this.key;
    this._employeeService.getMasteryLevel(this.url)
      .subscribe(resEmployeeData => this.employees = resEmployeeData);
  }
}
