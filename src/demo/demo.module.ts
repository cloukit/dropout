import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { CloukitDropoutModule } from '../index';
import demoStoriesSource from '../assets/demoStoriesSource.json';
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
    // REGISTER STORY SOURCES
    //
    const keys = Object.keys(demoStoriesSource);
    for (let i=0; i<keys.length; i++) {
      this.cloukitStoryService.addSource(keys[i], demoStoriesSource[keys[i]]);
    }
  }
}
