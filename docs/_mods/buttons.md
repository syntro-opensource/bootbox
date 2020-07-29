---
title: Buttons
layout: default
---

# Buttons
---

Buttons in Bootstrap are an important tool to build an interface. While base
bootstrap buttons are simple and easy to use, their default styling is seen all
across the web and customizing them quickly becomes a necessity in every project.

Bootbox helps you with this by providing several button modifications.


## Gradients
---
By Default, Bootstrap buttons are plain. In projects where gradients are used,
our gradient buttons may help making buttons more engaging:

<div class="mt-3 rounded border p-3">
  <div class="m-3">
    <button class="btn btn-sm btn-gradient-primary">primary</button>
    <button class="btn btn-sm btn-gradient-info">info</button>
    <button class="btn btn-sm btn-gradient-success">success</button>
    <button class="btn btn-sm btn-gradient-warning">warning</button>
    <button class="btn btn-sm btn-gradient-danger">danger</button>
  </div>
  <div class="m-3">
    <button class="btn btn-gradient-primary">primary</button>
    <button class="btn btn-gradient-info">info</button>
    <button class="btn btn-gradient-success">success</button>
    <button class="btn btn-gradient-warning">warning</button>
    <button class="btn btn-gradient-danger">danger</button>
  </div>
  <div class="m-3">
    <button class="btn btn-lg btn-gradient-primary">primary</button>
    <button class="btn btn-lg btn-gradient-info">info</button>
    <button class="btn btn-lg btn-gradient-success">success</button>
    <button class="btn btn-lg btn-gradient-warning">warning</button>
    <button class="btn btn-lg btn-gradient-danger">danger</button>
  </div>
</div>
```html
<button class="btn btn-gradient-primary">primary</button>
<button class="btn btn-gradient-info">info</button>
<button class="btn btn-gradient-success">success</button>
<button class="btn btn-gradient-warning">warning</button>
<button class="btn btn-gradient-danger">danger</button>
```

You can include these gradients using
```scss
// -> import mods AFTER bootstrap/scss/variables
// -> import mods AFTER bootstrap/scss/bootstrap

@import '~@syntro-opensource/bootbox/scss/buttons/gradients';
```


## Plastic
Plastic buttons use shadows to give a feeling of plasticity to buttons. These
buttons mimic material design.

<div class="mt-3 rounded border p-3">
  <div class="m-3">
    <button class="btn btn-plastic btn-sm btn-primary">primary</button>
    <button class="btn btn-plastic btn-sm btn-info">info</button>
    <button class="btn btn-plastic btn-sm btn-success">success</button>
    <button class="btn btn-plastic btn-sm btn-warning">warning</button>
    <button class="btn btn-plastic btn-sm btn-danger">danger</button>
  </div>
  <div class="m-3">
    <button class="btn btn-plastic btn-primary">primary</button>
    <button class="btn btn-plastic btn-info">info</button>
    <button class="btn btn-plastic btn-success">success</button>
    <button class="btn btn-plastic btn-warning">warning</button>
    <button class="btn btn-plastic btn-danger">danger</button>
  </div>
  <div class="m-3">
    <button class="btn btn-plastic btn-outline-primary">primary</button>
    <button class="btn btn-plastic btn-outline-info">info</button>
    <button class="btn btn-plastic btn-outline-success">success</button>
    <button class="btn btn-plastic btn-outline-warning">warning</button>
    <button class="btn btn-plastic btn-outline-danger">danger</button>
  </div>
  <div class="m-3">
    <button class="btn btn-plastic btn-lg btn-primary">primary</button>
    <button class="btn btn-plastic btn-lg btn-info">info</button>
    <button class="btn btn-plastic btn-lg btn-success">success</button>
    <button class="btn btn-plastic btn-lg btn-warning">warning</button>
    <button class="btn btn-plastic btn-lg btn-danger">danger</button>
  </div>
</div>
```html
<button class="btn btn-plastic btn-primary">primary</button>
<button class="btn btn-plastic btn-info">info</button>
<button class="btn btn-plastic btn-success">success</button>
<button class="btn btn-plastic btn-warning">warning</button>
<button class="btn btn-plastic btn-danger">danger</button>
```

You can include the style using
```scss
// -> import mods AFTER bootstrap/scss/variables
// -> import mods AFTER bootstrap/scss/bootstrap

@import '~@syntro-opensource/bootbox/scss/buttons/plastic';
```

Plastic buttons can be combined with the ripple effect to achieve the complete
material design look:
<div class="mt-3 rounded border p-3">
  <button class="btn btn-plastic effect-ripple btn-primary">primary</button>
  <button class="btn btn-plastic effect-ripple btn-info">info</button>
  <button class="btn btn-plastic effect-ripple btn-success">success</button>
  <button class="btn btn-plastic effect-ripple btn-warning">warning</button>
  <button class="btn btn-plastic effect-ripple btn-danger">danger</button>
</div>
```html
<button class="btn btn-plastic effect-ripple btn-primary">primary</button>
<button class="btn btn-plastic effect-ripple btn-info">info</button>
<button class="btn btn-plastic effect-ripple btn-success">success</button>
<button class="btn btn-plastic effect-ripple btn-warning">warning</button>
<button class="btn btn-plastic effect-ripple btn-danger">danger</button>
```
