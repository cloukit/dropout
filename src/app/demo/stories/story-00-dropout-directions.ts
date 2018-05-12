import { Component } from '@angular/core';
import { DropoutPlacement, DropoutTrigger } from '../../../../projects/cloukit/dropout/src/public_api';

import { Subject } from 'rxjs';

@Component({
  selector: 'cloukit-story-00-dropout-directions',
  templateUrl: './story-00-dropout-directions.html',
  styleUrls: [ '../demo.styles.css' ]
})
export class Story00Component {
  // Make enums available in template
  DropoutPlacement = DropoutPlacement;
  DropoutTrigger = DropoutTrigger;
  dropoutRollingPlacement: DropoutPlacement = DropoutPlacement.DOWN_LEFT;

  dropout1Active = false;
  myModal1Close: Subject<boolean>;

  icon = {
    down: '254.4375 476.3125 463.515625 239.902344 45.359375 239.902344',
    right: '158 38.2109375 423.109375 256.902344 158 475.59375',
  };

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
