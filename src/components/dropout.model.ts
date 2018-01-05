/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { TemplateRef } from '@angular/core';

/**
 * See: https://cloukit.github.io/dropout/doc/cloukit-dropout-positioning.svg
 */
export enum DropoutPlacement {
  DOWN_LEFT=1,
  UP_LEFT=2,
  VAUTO_LEFT=3,
  DOWN_RIGHT=4,
  UP_RIGHT=5,
  VAUTO_RIGHT=6,
  DOWN_CENTER=7,
  UP_CENTER=8,
  VAUTO_CENTER=9,
  LEFT_TOP=10,
  LEFT_BOTTOM=11,
  LEFT_VAUTO=12,
  RIGHT_TOP=13,
  RIGHT_BOTTOM=14,
  RIGHT_VAUTO=15,
  LEFT_CENTER=16,
  RIGHT_CENTER=17,
  HAUTO_CENTER=18,
  FIX_TOP_LEFT=19,
  FIX_TOP_RIGHT=20,
  FIX_BOTTOM_LEFT=21,
  FIX_BOTTOM_RIGHT=22,
}

export enum DropoutTrigger {
  ONMOUSEOVER=1,
  ONCLICK=2,
  PROGRAMMATIC=3,
}

export class DropoutComponentRefId {
  public id: string;
  constructor(_id: string) {
    this.id = _id;
  }
}

export class DropoutComponentCreationRequest {
  public triggerElement: HTMLElement;
  public placement: DropoutPlacement;
  public zIndex: number;
  public template: TemplateRef<string>;
}

/**
 * Absolute coordinates in pixels where to place dropout container
 */
export class DropoutContainerCoordinates {
  public left?: number;
  public right?: number;
  public bottom?: number;
  public top?: number;
}

/**
 * How big the viewPort is in pixels
 */
export class DropoutViewPortDimensions {
  public width: number;
  public height: number;
  constructor(_width: number, _height: number) {
    this.width = _width;
    this.height = _height;
  }
}

export class GenericDimensions {
  public x: number;
  public y: number;
  public width: number;
  public height: number;
  constructor(_x: number, _y: number, _width: number, _height: number) {
    this.x = _x;
    this.y = _y;
    this.width = _width;
    this.height = _height;
  }
  public static from(htmlElement: HTMLElement) {
    return new DropoutTriggerElementDimensions(
      htmlElement.getBoundingClientRect().left,
      htmlElement.getBoundingClientRect().top,
      htmlElement.getBoundingClientRect().width,
      htmlElement.getBoundingClientRect().height,
    );
  }
}

export class DropoutTriggerElementDimensions extends GenericDimensions { }
export class DropoutOutletDimensions extends GenericDimensions { }
