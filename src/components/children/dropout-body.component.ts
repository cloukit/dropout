/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component, Input, TemplateRef } from '@angular/core';
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'cloukit-dropout-body',
  template: `
  <div>
    {{dropoutBodyPlainText}}
    <ng-container *ngTemplateOutlet="dropoutBodyTemplateRef"></ng-container>
  </div>`,
})
export class CloukitDropoutBodyComponent {

  @Input()
  public dropoutTriggerElement: HTMLElement;

  @Input()
  public dropoutBodyPlainText: string;

  @Input()
  public dropoutBodyTemplateRef: TemplateRef<string>;

  public activate() {
    console.log('activate');
    if (isNullOrUndefined(this.dropoutTriggerElement)) {
      return;
    }
  }

  public deactivate() {
    console.log('deactivate');
  }
}
