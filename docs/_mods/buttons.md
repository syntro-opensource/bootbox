---
title: Buttons
layout: default
---

# Buttons
---

```html
<div class="mx-3">
  <button class="btn btn-sm btn-primary">small button</button>
  <button class="btn btn-primary">normal button</button>
  <button class="btn btn-lg btn-primary">large button</button>
</div>
```


```js
document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
  });
});
```
<div class="my-3">
  <!-- Bootcamp -->
  <div class="my-4">
    <h4>Bootcamp</h4>
    <p>
      Buttons in Bootstrap are an important tool to build an interface.
      We have created a button bootcamp which strengthens buttons visually
      by increasing the padding, therefore making Buttons more impactful.
      <br>
      We recommend choosing another font-family to make buttons even
      more impactful.
    </p>
    <div class="mx-3">
      <button class="btn btn-sm btn-primary">small button</button>
      <button class="btn btn-primary">normal button</button>
      <button class="btn btn-lg btn-primary">large button</button>
    </div>
  </div>

  <!-- Gradients -->
  <div class="my-4">
    <h4>Gradients</h4>
    <p>
      Use Gradient buttons for an engaging user-experience
    </p>
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

  <!-- Plastic -->
  <div class="my-4">
    <h4>Plastic</h4>
    <p>
      This effect is intended to mimic material design.
    </p>

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
    <p>This plays nicely with the ripple effect:</p>
    <div class="m-3">
      <button class="btn btn-plastic btn-info effect-ripple">Button with ripple effect</button>
      <button class="btn btn-plastic btn-gradient-info effect-ripple">Button with ripple effect</button>
    </div>
  </div>

</div>
