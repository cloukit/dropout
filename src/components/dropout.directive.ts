/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import {
  Directive, TemplateRef, Input, HostListener, ViewContainerRef, EventEmitter, Output, OnInit,
} from '@angular/core';
import { CloukitDropoutService } from './services/dropout.service';
import { DropoutComponentCreationRequest, DropoutComponentRefId, DropoutPlacement, DropoutTrigger } from './dropout.model';
import { Observable } from 'rxjs/Observable';

@Directive({
  selector: '[cloukitDropout]',
})
export class CloukitDropoutDirective implements OnInit {
  @Input('cloukitDropout')
  cloukitDropout: TemplateRef<string>;

  @Input('cloukitDropoutTrigger')
  cloukitDropoutTrigger: DropoutTrigger = DropoutTrigger.ONMOUSEOVER;

  @Input('cloukitDropoutClose')
  cloukitDropoutClose: Observable<boolean>;

  @Input('cloukitDropoutReposition')
  cloukitDropoutReposition: Observable<boolean>;

  @Input('cloukitDropoutPlacement')
  cloukitDropoutPlacement: DropoutPlacement = DropoutPlacement.DOWN_LEFT;

  @Input('cloukitDropoutZIndex')
  cloukitDropoutZIndex: number;

  @Output()
  cloukitDropoutActive = new EventEmitter<boolean>();

  private dropoutRef: DropoutComponentRefId;

  constructor(private dropoutService: CloukitDropoutService,
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
    if (self.cloukitDropoutClose instanceof Observable) {
      self.cloukitDropoutClose.subscribe(() => {
        self._doDeactivate();
      });
    }
    if (self.cloukitDropoutReposition instanceof Observable) {
      self.cloukitDropoutReposition.subscribe(() => {
        self.dropoutService.forceReposition(self.dropoutRef);
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
