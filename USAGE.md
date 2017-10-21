------
------

## WARN WARN WARN 

## HIGHLY EXPERIMENTAL!! DO NOT USE YET!!

## WARN WARN WARN

------
------

You can position the **dropout container** in the following ways:

cloukitSvg:https://cloukit.github.io/dropout/doc/cloukit-dropout-positioning.svg


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

`app-component.html`
```html
<cloukit-dropout-outlet></cloukit-dropout-outlet>
```
