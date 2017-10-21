/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import {
  Directive, TemplateRef, Input, HostListener, ViewContainerRef, EventEmitter, Output, OnInit,
} from '@angular/core';
import { DropoutService } from './services/dropout.service';
import { Subject } from 'rxjs/Subject';
import { DropoutComponentCreationRequest, DropoutComponentRefId, DropoutPlacement, DropoutTrigger } from './dropout.model';

@Directive({
  selector: '[cloukitDropout]',
})
export class CloukitDropoutDirective implements OnInit {
  @Input('cloukitDropout')
  cloukitDropout: TemplateRef<string>;

  @Input('cloukitDropoutTrigger')
  cloukitDropoutTrigger: DropoutTrigger = DropoutTrigger.ONMOUSEOVER;

  @Input('cloukitDropoutClose')
  cloukitDropoutClose: Subject<boolean>;

  @Input('cloukitDropoutPlacement')
  cloukitDropoutPlacement: DropoutPlacement = DropoutPlacement.HORIZONTAL_LEFT_BOTTOM;

  @Input('cloukitDropoutZIndex')
  cloukitDropoutZIndex: number;

  @Output()
  cloukitDropoutActive = new EventEmitter<boolean>();

  private dropoutRef: DropoutComponentRefId;

  constructor(private dropoutService: DropoutService,
              private viewContainerRef: ViewContainerRef) {
  }

  _doActivate() {
    const request = new DropoutComponentCreationRequest();
    request.triggerElement = this.viewContainerRef.element.nativeElement;
    request.template = this.cloukitDropout;
    request.placement = this.cloukitDropoutPlacement;
    request.zIndex = this.cloukitDropoutZIndex;
    // FIXME: Calculate OutsideClick: template.elementRef.nativeElement.offsetHeight
    this.dropoutRef = this.dropoutService.requestDropoutCreation(request);
    this.cloukitDropoutActive.emit(true);
  }

  _doDeactivate() {
    this.dropoutService.destroyComponent(this.dropoutRef);
    this.dropoutRef = undefined;
    this.cloukitDropoutActive.emit(false);
  }

  ngOnInit() {
    const self = this;
    if (self.cloukitDropoutClose instanceof Subject) {
      self.cloukitDropoutClose.subscribe(() => {
        self._doDeactivate();
      });
    }
  }

  @HostListener('click')
  activateClick() {
    if (this.cloukitDropoutTrigger === DropoutTrigger.ONCLICK) {
      if (this.dropoutRef === undefined) {
        this._doActivate();
      } else {
        this._doDeactivate();
      }
    }
  }

  @HostListener('focusin')
  @HostListener('mouseenter')
  activate() {
    if (this.cloukitDropoutTrigger === DropoutTrigger.ONMOUSEOVER) {
      this._doActivate();
    }
  }

  @HostListener('focusout')
  @HostListener('mouseleave')
  deactivate() {
    if (this.cloukitDropoutTrigger === DropoutTrigger.ONMOUSEOVER) {
      this._doDeactivate();
    }
  }
}
