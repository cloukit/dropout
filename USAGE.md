The **dropout is the basis component for higher level components like Modal, Tooltip, Toastr and Dropdown**.

&nbsp;

### Initial Setup

Import the needed modules in your main module.

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// (1) Package Imports
import { CloukitDropoutModule } from '@cloukit/dropout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // (2) Register Imports
    CloukitDropoutModule,
  ],
  providers: [ ],
  bootstrap: [ AppComponent ],
})
// ....
```

It is very important to place the **cloukit-dropout-outlet** at the top of your root component.
The root component and your body should have `margin:0` and `padding:0`. Otherwise the absolute placed 
**dropout-container** will be offset.

```html
<html>
<head>
 <style>body { margin:0; padding:0; }</style>
</head>
<body>
 <app-root></app-root>
</body>
</html>
```

Inside your main bootstrap components (e.g. `app-component.html`) template you say:

```html
<cloukit-dropout-outlet></cloukit-dropout-outlet>
<div style="padding:50px">
  other stuff
</div>
```

That way the outlet is at x=0,y=0 pixels and all the dropouts will be placed correctly.

&nbsp;

### Positioning

You can **position the dropout container** in the following ways:

cloukitSvg:https://cloukit.github.io/dropout/doc/cloukit-dropout-positioning.svg

But what about **"real centering"**?

cloukitSvg:https://cloukit.github.io/dropout/doc/cloukit-dropout-positioning-centering.svg


&nbsp;

### How it works

cloukitSvg:https://cloukit.github.io/dropout/doc/cloukit-dropout-how-it-works.svg


Why do it that way? I am aware of the possibility to get the `rootElement` via the `ApplicationRef`, 
but this is in my opinion a hacky way of doing things that could potentially break and that is why we use the outlet to do it in a well documented way.

&nbsp;

### Version Compatibility

You can read the [release comments](https://github.com/cloukit/dropout/releases) for full details.

Please mind the the compatibility chart

| Angular Version | Cloukit Component Version |
|-----------------|---------------------------|
| >=5.0.0         | 1.5.6 - current           |
| >=4.0.0         | 1.0.0 - 1.5.5             |

To install a specific version use:

```
yarn add @cloukit/dropout@1.5.5
```
