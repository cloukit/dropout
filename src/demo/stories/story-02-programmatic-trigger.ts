import { Component } from '@angular/core';
import { DemoComponent } from '../demo.component';
import { DropoutPlacement, DropoutTrigger } from '../../index';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'story-02-programmatic-trigger',
  templateUrl: './story-02-programmatic-trigger.html',
  styles: [].concat(DemoComponent.sharedStyles),
})
export class Story02Component {
  // Make enums available in template
  DropoutPlacement = DropoutPlacement;
  DropoutTrigger = DropoutTrigger;

  public closeDropout = new Subject<boolean>();
  public openDropout = new Subject<boolean>();
}
