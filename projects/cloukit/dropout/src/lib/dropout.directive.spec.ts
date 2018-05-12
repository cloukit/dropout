/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component, DebugElement } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { CloukitDropoutDirective } from './dropout.directive';
import { By } from '@angular/platform-browser';

@Component({
  template: `
  <ng-template #demoModal>
    hello
  </ng-template>
  <input
    type="text"
    [cloukitDropout]="demoModal"
  >
  <div>outside</div>
  `
})
class TestComponent {}

describe('CloukitDropoutDirective', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        CloukitDropoutDirective,
      ],
    }).compileComponents();
  }));
  it('should create the app and click outside should work', async(() => {
    const fixture = TestBed.createComponent(TestComponent);
    const component = fixture.componentInstance;
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
