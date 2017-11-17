import { Component } from '@angular/core';
import { DropoutPlacement, DropoutTrigger } from '../index';

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styles: [].concat(DemoComponent.sharedStyles),
})
export class DemoComponent {
  public static sharedStyles = [
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
  ];
  // Make enums available in template
  DropoutPlacement = DropoutPlacement;
  DropoutTrigger = DropoutTrigger;

}
