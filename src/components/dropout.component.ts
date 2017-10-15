/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { ComponentRef, Directive, TemplateRef, ViewContainerRef, Input, ComponentFactoryResolver, HostListener } from '@angular/core';
import { CloukitDropoutBodyComponent } from './children/dropout-body.component';

@Directive({
  selector: '[cloukitDropout]',
})
export class CloukitDropoutDirective {
  @Input()
  cloukitDropout: string | TemplateRef<string>;

  private dropoutRef: ComponentRef<CloukitDropoutBodyComponent>;

  constructor(private viewContainerRef: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  @HostListener('focusin')
  @HostListener('mouseenter')
  activate() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(CloukitDropoutBodyComponent);
    this.dropoutRef = this.viewContainerRef.createComponent(componentFactory);
    if (this.cloukitDropout instanceof TemplateRef) {
      this.dropoutRef.instance.dropoutBodyTemplateRef = this.cloukitDropout as TemplateRef<string>;
    } else {
      this.dropoutRef.instance.dropoutBodyPlainText = this.cloukitDropout as string;
    }
    this.dropoutRef.instance.dropoutTriggerElement = this.viewContainerRef.element.nativeElement;
    this.dropoutRef.instance.activate();
  }

  @HostListener("focusout")
  @HostListener("mouseleave")
  deactivate() {
    this.dropoutRef.destroy();
  }
}
