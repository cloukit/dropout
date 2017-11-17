import { Component } from '@angular/core';
import { DemoComponent } from '../demo.component';
import { DropoutPlacement, DropoutTrigger } from '../../index';

@Component({
  selector: 'story-01-off-placed-trigger-element',
  templateUrl: './story-01-off-placed-trigger-element.html',
  styles: [].concat(DemoComponent.sharedStyles),
})
export class Story01Component {
  // Make enums available in template
  DropoutPlacement = DropoutPlacement;
  DropoutTrigger = DropoutTrigger;
}
