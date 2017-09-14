import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun-stuff',
  templateUrl: './fun-stuff.component.html',
  styleUrls: ['./fun-stuff.component.css']
})
export class FunStuffComponent implements OnInit {
  value = '';
  firstAnswer = '';
  constructor() { }

  ngOnInit() {}
  answer1(box: string){
    this.value = box;
    this.firstAnswer = 'rapid fire';
  }
}
