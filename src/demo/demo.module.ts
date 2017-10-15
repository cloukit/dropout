import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { CloukitDropoutModule } from '../index';

@NgModule({
  declarations: [ DemoComponent ],
  exports: [ DemoComponent ],
  imports: [ CommonModule, CloukitDropoutModule ],
  providers: [ ],
  bootstrap: [ ]
})
export class DemoModule {
}
