/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component, HostListener, Input, OnInit, TemplateRef } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { DropoutPlacement, DropoutTriggerElementDimensions, DropoutViewPortDimensions } from '../dropout.model';
import { DropoutPositioningHelper } from '../../logic/dropout-positioning-helper';

/**
 * The Dropout Body can be anything from a Tooltip, Modal to a Dropdown.
 * It is basically all the same thing. An absolute positioned element.
 * Just the size, appearance and open/close events are different.
 */
@Component({
  selector: 'cloukit-dropout-body',
  template: `
    <div [ngStyle]="style">
      <ng-container *ngTemplateOutlet="dropoutBodyTemplateRef"></ng-container>
    </div>`,
})
export class CloukitDropoutContainerComponent implements OnInit {

  @Input()
  public dropoutTriggerElement: HTMLElement;

  @Input()
  public dropoutBodyTemplateRef: TemplateRef<string>;

  @Input()
  public dropoutPlacement: DropoutPlacement;

  @Input()
  public dropoutZIndex: number;

  public style = {
    position: 'absolute',
    zIndex: 300,
  };

  ngOnInit() {
    if (this.dropoutZIndex !== undefined && this.dropoutZIndex !== null) {
      this.style[ 'zIndex' ] = this.dropoutZIndex;
    }
  }

  public repositionRelativeToTriggerElement(viewPortDimensions: DropoutViewPortDimensions) {
    if (!isNullOrUndefined(this.dropoutTriggerElement)) {
      const triggerElementDimensions = DropoutTriggerElementDimensions.from(this.dropoutTriggerElement);
      const coordinates = DropoutPositioningHelper.calculate(this.dropoutPlacement, triggerElementDimensions, viewPortDimensions);
      if (coordinates.right !== undefined) {
        this.style['right'] = `${coordinates.right}px`;
      }
      if (coordinates.left !== undefined) {
        this.style['left'] = `${coordinates.left}px`;
      }
      if (coordinates.top !== undefined) {
        this.style['top'] = `${coordinates.top}px`;
      }
      if (coordinates.bottom !== undefined) {
        this.style['bottom'] = `${coordinates.bottom}px`;
      }
    }
  }

  /**
   * Reposition the dropout on window resize changes
   * @param event
   */
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.repositionRelativeToTriggerElement(
      new DropoutViewPortDimensions(event.target.innerWidth, event.target.innerHeight));
  }
}

