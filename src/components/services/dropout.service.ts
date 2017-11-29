/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { ComponentRef, Injectable, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {
  DropoutComponentCreationRequest, DropoutComponentRefId, DropoutOutletDimensions,
  DropoutViewPortDimensions,
} from '../dropout.model';
import { CloukitDropoutContainerComponent } from '../children/dropout-container.component';

@Injectable()
export class CloukitDropoutService {

  /** Holds references to all ComponentRefs with a automatically generated id */
  private _dropoutComponents = new Map<DropoutComponentRefId, ComponentRef<CloukitDropoutContainerComponent>>();

  /** list of creation requests that will get created async by the outlet */
  private _dropoutComponentCreationRequests = new Map<DropoutComponentRefId, DropoutComponentCreationRequest>();

  /** subscribe to this to be notified of componentCreationRequests */
  public dropoutComponentCreationRequests: Subject<DropoutComponentRefId> = new Subject<DropoutComponentRefId>();

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  private generateUuid() {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  }

  public requestDropoutCreation(request: DropoutComponentCreationRequest): DropoutComponentRefId {
    const self = this;
    const id = new DropoutComponentRefId(this.generateUuid());
    self._dropoutComponentCreationRequests.set(id, request);
    self.dropoutComponentCreationRequests.next(id);
    return id;
  }

  /** CALLED FROM OUTLET! */
  public createDropout(id: DropoutComponentRefId, viewContainerRef: ViewContainerRef, outlet: HTMLElement): DropoutComponentRefId {
    const self = this;
    const componentFactory = self.componentFactoryResolver.resolveComponentFactory(CloukitDropoutContainerComponent);
    const dropoutRef = viewContainerRef.createComponent(componentFactory);
    dropoutRef.onDestroy(() => {
      // FIXME dropoutRef = undefined;
    });
    const request = self._dropoutComponentCreationRequests.get(id);
    dropoutRef.instance.dropoutBodyTemplateRef = request.template;
    dropoutRef.instance.dropoutTriggerElement = request.triggerElement;
    dropoutRef.instance.dropoutPlacement = request.placement;
    dropoutRef.instance.dropoutZIndex = request.zIndex;
    dropoutRef.instance.outlet = outlet;
    dropoutRef.instance.repositionRelativeToTriggerElement(new DropoutViewPortDimensions(window.innerWidth, window.innerHeight));
    self._dropoutComponentCreationRequests.delete(id);
    self._dropoutComponents.set(id, dropoutRef);
    return id;
  }

  public destroyComponent(id: DropoutComponentRefId) {
    if (id !== undefined) {
      const component = this._dropoutComponents.get(id);
      component.destroy();
      this._dropoutComponents.delete(id);
    }
  }

  public forceReposition(id: DropoutComponentRefId) {
    const self = this;
    const dropout = self._dropoutComponents.get(id);
    if (dropout !== undefined && dropout !== null) {
      dropout.instance.repositionRelativeToTriggerElement(new DropoutViewPortDimensions(window.innerWidth, window.innerHeight));
    }
  }

}
