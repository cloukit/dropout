import { Component } from '@angular/core';
import { DropoutPlacement, DropoutTrigger } from '../../../../projects/cloukit/dropout/src/public_api';
import { Subject } from 'rxjs';

@Component({
  selector: 'cloukit-story-02-programmatic-trigger',
  templateUrl: './story-02-programmatic-trigger.html',
  styleUrls: [ '../demo.styles.css' ]
})
export class Story02Component {
  // Make enums available in template
  DropoutPlacement = DropoutPlacement;
  DropoutTrigger = DropoutTrigger;

  public closeDropout = new Subject<boolean>();
  public openDropout = new Subject<boolean>();
}
