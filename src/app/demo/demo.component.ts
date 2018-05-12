import { Component } from '@angular/core';
import { DropoutPlacement, DropoutTrigger } from '../../../projects/cloukit/dropout/src/public_api';

@Component({
  selector: 'cloukit-demo',
  templateUrl: './demo.component.html',
  styleUrls: [ './demo.styles.css' ]
})
export class DemoComponent {
  // Make enums available in template
  DropoutPlacement = DropoutPlacement;
  DropoutTrigger = DropoutTrigger;

}
