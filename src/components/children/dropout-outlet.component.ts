/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DropoutService } from '../services/dropout.service';

@Component({
  selector: 'cloukit-dropout-outlet',
  template: `
    <div style="position:relative;">
      <ng-container #vc></ng-container>
    </div>`,
})
export class CloukitDropoutOutletComponent {

  /**
   * ViewChild ref of the <ng-container>.
   * This is where the dropoutComponents will be injected
   */
  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;

  constructor(private dropoutService: DropoutService) {
    const self = this;
    self.dropoutService.dropoutComponentCreationRequests
      .subscribe(id => {
        self.dropoutService.createDropout(id, self.vc)
      });
  }

}
