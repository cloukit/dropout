import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { DropoutPlacement, DropoutTrigger } from '../index';

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styles: [
    '.demo { font-family:sans-serif; }',
    '.demoModal1 { font-family:sans-serif; padding:10px; width:400px; height:200px; border: 3px solid #710ECC; background-color:#555; color:#fff; }',
    '.demoButton { background-color:#710ECC; color:#fff; border:1px solid #9e0eff; outline:0; padding:6px; font-size:1rem; cursor: pointer; }',
    '.demoTooltip { font-family: sans-serif; background-color:#710ECC; color:#fff; border:0; padding:4px; font-size:0.8rem; }',
    '.tooltip { color:#710ECC; cursor: pointer; }',
  ],
})
export class DemoComponent {

  // Make enums available in template
  DropoutPlacement = DropoutPlacement;
  DropoutTrigger = DropoutTrigger;

  icon = {
    down: '254.4375 476.3125 463.515625 239.902344 45.359375 239.902344',
    right: '158 38.2109375 423.109375 256.902344 158 475.59375',
  };

  dropout1Active = false;
  myModal1Close: Subject<boolean>;

  closeModal1() {
    this.myModal1Close.next(true);
  }

  constructor() {
    this.myModal1Close = new Subject<boolean>();
  }
}
