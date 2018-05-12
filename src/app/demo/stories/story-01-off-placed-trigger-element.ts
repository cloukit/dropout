import { Component } from '@angular/core';
import { DropoutPlacement, DropoutTrigger } from '../../../../projects/cloukit/dropout/src/public_api';
import { Subject } from 'rxjs';

@Component({
  selector: 'cloukit-story-01-off-placed-trigger-element',
  templateUrl: './story-01-off-placed-trigger-element.html',
  styleUrls: [ '../demo.styles.css' ]
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
