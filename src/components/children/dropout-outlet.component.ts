/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component, ViewChild, ViewContainerRef, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { CloukitDropoutService } from '../services/dropout.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'cloukit-dropout-outlet',
  template: `
    <div #outlet style="position:relative;">
      <ng-container #vc></ng-container>
    </div>`,
})
export class CloukitDropoutOutletComponent implements OnInit, OnDestroy {

  private preDestory = new Subject<boolean>();
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
      .takeUntil(self.preDestory)
      .subscribe(id => {
        self.dropoutService
          .createDropout(id,
            self.vc,
            this.outlet.nativeElement,
          );
      });
  }

  ngOnDestroy() {
    this.preDestory.next(true);
    this.preDestory.complete();
  }

}
