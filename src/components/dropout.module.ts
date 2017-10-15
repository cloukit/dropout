/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { NgModule } from '@angular/core';
import { CloukitDropoutDirective } from './dropout.component';
import { CloukitDropoutBodyComponent } from './children/dropout-body.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ CommonModule ],
  exports: [ CloukitDropoutDirective ],
  declarations: [ CloukitDropoutDirective, CloukitDropoutBodyComponent ],
  entryComponents: [ CloukitDropoutBodyComponent ],
})
export class CloukitDropoutModule {}
