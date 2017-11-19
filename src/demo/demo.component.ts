import { Component } from '@angular/core';
import { DropoutPlacement, DropoutTrigger } from '../index';

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styles: [].concat(DemoComponent.sharedStyles),
})
export class DemoComponent {
  public static sharedStyles = [
    `.modal {
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
    }
    `,
    `.box {
      border:1px solid #ccc;
      padding:10px;
    `,
    `.bratwurst {
      width:200px;
      cursor: pointer;
      user-select: none;
    }`,
  ];
  // Make enums available in template
  DropoutPlacement = DropoutPlacement;
  DropoutTrigger = DropoutTrigger;

}
