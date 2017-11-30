/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component, ViewChild, ViewContainerRef, ElementRef, OnInit } from '@angular/core';
import { CloukitDropoutService } from '../services/dropout.service';

@Component({
  selector: 'cloukit-dropout-outlet',
  template: `
    <div #outlet style="position:relative;">
      <ng-container #vc></ng-container>
    </div>`,
})
export class CloukitDropoutOutletComponent implements OnInit {

  /**
   * ViewChild ref of the <ng-container>.
   * This is where the dropoutComponents will be injected
   */
  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;

  /**
   * The outlet itself. I the outlet does not sit at x=0 and y=0
   * we can use the nativeElement to get the offset and recalculate the
   * placements of the dropout containers.s
   */
  @ViewChild('outlet') outlet: ElementRef;

  constructor(private dropoutService: CloukitDropoutService) {}

  ngOnInit() {
    const self = this;
    self.dropoutService.setViewContainerRef(self.vc);
    self.dropoutService.dropoutComponentCreationRequests
      .subscribe(id => {
        self.dropoutService
          .createDropout(id,
            self.vc,
            this.outlet.nativeElement
          );
      });
  }

}
