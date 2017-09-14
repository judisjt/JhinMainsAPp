import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun-stuff',
  templateUrl: './fun-stuff.component.html',
  styleUrls: ['./fun-stuff.component.css']
})
export class FunStuffComponent implements OnInit {
  value = 'a';
  value2 = 'a';
  value3 = 'a';
  value4 = 'a';
  value5 = 'hello';
  firstAnswer = '';
  secondAnswer = '';
  thirdAnswer = '';
  fourthAnswer = '';
  constructor() { }

  ngOnInit() {}

  answer1(box: string) {
    this.value = box;
    this.firstAnswer = 'Rapid fire';
  }
  answer2(box2: string) {
    this.value2 = box2;
    this.secondAnswer = 'tawdry';
  }
  answer3(box3: string) {
    this.value3 = box3;
    this.thirdAnswer = 'perfection';
  }
  answer4(box4: string) {
    this.value4 = box4;
    this.fourthAnswer = 'shot';
  }
}
