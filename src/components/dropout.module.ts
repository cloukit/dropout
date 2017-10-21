/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloukitDropoutDirective } from './dropout.component';
import { DropoutService } from './services/dropout.service';
import { CloukitDropoutOutletComponent } from './children/dropout-outlet.component';
import { CloukitDropoutContainerComponent } from './children/dropout-container.component';

@NgModule({
  imports: [ CommonModule ],
  exports: [ CloukitDropoutDirective, CloukitDropoutOutletComponent ],
  declarations: [ CloukitDropoutDirective, CloukitDropoutContainerComponent, CloukitDropoutOutletComponent ],
  providers: [ DropoutService ],
  entryComponents: [ CloukitDropoutContainerComponent ],
})
export class CloukitDropoutModule {}
