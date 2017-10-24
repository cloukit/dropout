import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { DropoutPlacement, DropoutTrigger } from '../index';

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styles: [
    `.demoModal1 {
      font-family: sans-serif;
      padding: 10px;
      width: 200px;
      height: 100px;
      border: 3px solid #68c1ff;
      background-color: #A4E3FE;
      color: #333;
    }`,
    `.demoButton { 
      background-color:#710ECC;
      color:#fff;
      border:1px solid #9e0eff;
      outline:0;
      padding:6px;
      font-size:1rem;
      cursor: pointer;
    }`,
    `.demoTooltipCenter {
      background-color:#A4E3FE;
      color:#333;
      border:0;
      padding:4px;
      font-size:0.8rem;
      transform: translate(-50%, 0);
    }`,
    `.tooltipTrigger {
      color:#710ECC;
      cursor: help;
    }`,
  ],
})
export class DemoComponent {

  // Make enums available in template
  DropoutPlacement = DropoutPlacement;
  DropoutTrigger = DropoutTrigger;
  dropoutRollingPlacement: DropoutPlacement = DropoutPlacement.DOWN_LEFT;

  icon = {
    down: '254.4375 476.3125 463.515625 239.902344 45.359375 239.902344',
    right: '158 38.2109375 423.109375 256.902344 158 475.59375',
  };

  dropout1Active = false;
  myModal1Close: Subject<boolean>;

  closeModal1() {
    this.myModal1Close.next(true);
  }

  rollPlacement() {
    if (!this.dropout1Active) {
      this.dropoutRollingPlacement = this.dropoutRollingPlacement + 1;
      if (this.dropoutRollingPlacement > 22) {
        this.dropoutRollingPlacement = 1;
      }
    }
  }

  constructor() {
    this.myModal1Close = new Subject<boolean>();
  }
}
