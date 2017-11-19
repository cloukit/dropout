import { Component } from '@angular/core';
import { DemoComponent } from '../demo.component';
import { DropoutPlacement, DropoutTrigger } from '../../index';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'story-01-off-placed-trigger-element',
  templateUrl: './story-01-off-placed-trigger-element.html',
  styles: [].concat(DemoComponent.sharedStyles),
})
export class Story01Component {
  // Make enums available in template
  DropoutPlacement = DropoutPlacement;
  DropoutTrigger = DropoutTrigger;

  closeDropout = new Subject<boolean>();
  repositionDropout = new Subject<boolean>();
  onScroll = 'reposition';

  onScrollDiv() {
    if (this.onScroll === 'reposition') {
      this.repositionDropout.next(true);
    }
    if (this.onScroll === 'close') {
      this.closeDropout.next(true);
    }
  }
}
