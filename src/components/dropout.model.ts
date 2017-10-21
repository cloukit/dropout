/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { TemplateRef } from '@angular/core';

export enum DropoutPlacement {
  VERTICAL_LEFT_BOTTOM=1,
  VERTICAL_LEFT_TOP=2,
  VERTICAL_LEFT_AUTO=3,
  VERTICAL_RIGHT_BOTTOM=4,
  VERTICAL_RIGHT_TOP=5,
  VERTICAL_RIGHT_AUTO=6,
  HORIZONTAL_LEFT_TOP=7,
  HORIZONTAL_LEFT_BOTTOM=8,
  HORIZONTAL_LEFT_AUTO=9,
  HORIZONTAL_RIGHT_TOP=10,
  HORIZONTAL_RIGHT_BOTTOM=11,
  HORIZONTAL_RIGHT_AUTO=12,
  ABSOLUTE_TOP_LEFT=13,
  ABSOLUTE_TOP_RIGHT=14,
  ABSOLUTE_BOTTOM_LEFT=15,
  ABSOLUTE_BOTTOM_RIGHT=16,
}

export enum DropoutTrigger {
  ONMOUSEOVER=1,
  ONCLICK=2,
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
