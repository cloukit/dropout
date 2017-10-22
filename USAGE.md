The **dropout is the basis component for higher level components like Modal, Tooltip, Toastr and Dropdown**.
Only use it directly, if those higher level components don't solve your problems.


&nbsp;

### Positioning

You can **position the dropout container** in the following ways:

cloukitSvg:https://cloukit.github.io/dropout/doc/cloukit-dropout-positioning.svg

But what about **"real centering"**?

cloukitSvg:https://cloukit.github.io/dropout/doc/cloukit-dropout-positioning-centering.svg

&nbsp;

### Dropout Outlet

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

### How it works

cloukitSvg:https://cloukit.github.io/dropout/doc/cloukit-dropout-how-it-works.svg


Why do it that way? I am aware of the possibility to get the `rootElement` via the `ApplicationRef`, 
but this is in my opinion a hacky way of doing things that could potentially break and that is why we use the outlet to do it in a well documented way.
