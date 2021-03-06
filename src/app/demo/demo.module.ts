import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { CloukitDropoutModule } from '../../../projects/cloukit/dropout/src/public_api';
import { CloukitStoryModule, CloukitStoryService } from '@cloukit/story';
import { Story00Component } from './stories/story-00-dropout-directions';
import { Story01Component } from './stories/story-01-off-placed-trigger-element';
import { Story02Component } from './stories/story-02-programmatic-trigger';

@NgModule({
  declarations: [
    DemoComponent,
    Story00Component,
    Story01Component,
    Story02Component,
  ],
  exports: [
    DemoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CloukitStoryModule,
    CloukitDropoutModule,
  ],
  providers: [ ],
  bootstrap: [ ]
})
export class DemoModule {
  constructor(private cloukitStoryService: CloukitStoryService) {
    //
    // INITIALIZE STORY SOURCES
    //
    let baseUrl = '/';
    if (document.getElementsByTagName('base') && document.getElementsByTagName('base')[0]) {
      // in Karma tests we do not have that dom element present
      baseUrl = document.getElementsByTagName('base')[0].href;
    }
    // File is auto generated by build chain 'yarn pre'
    const storySourceJsonUrl = `${baseUrl}assets/demo-stories-source.json`;
    this.cloukitStoryService.loadStoryJson(storySourceJsonUrl);
  }
}
