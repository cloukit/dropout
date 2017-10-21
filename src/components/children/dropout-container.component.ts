/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component, HostListener, Input, OnInit, TemplateRef } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { DropoutPlacement } from '../dropout.model';

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

  public repositionRelativeToTriggerElement(windowWidth: number) {
    if (!isNullOrUndefined(this.dropoutTriggerElement)) {
      if (this.dropoutPlacement === DropoutPlacement.HORIZONTAL_LEFT_BOTTOM) {
        this.style[ 'left' ] = `${this.dropoutTriggerElement.offsetLeft}px`;
        this.style[ 'top' ] = `${this.dropoutTriggerElement.offsetHeight + this.dropoutTriggerElement.offsetTop}px`;
      }
      if (this.dropoutPlacement === DropoutPlacement.HORIZONTAL_RIGHT_BOTTOM) {
        this.style[ 'right' ] = `${windowWidth - this.dropoutTriggerElement.offsetWidth - this.dropoutTriggerElement.offsetLeft}px`;
        this.style[ 'top' ] = `${this.dropoutTriggerElement.offsetHeight + this.dropoutTriggerElement.offsetTop}px`;
      }
    }
  }

  /**
   * Reposition the dropout on window resize changes
   * @param event
   */
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.repositionRelativeToTriggerElement(event.target.innerWidth);
  }
}

