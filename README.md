Gridder Ajax
=======

Version : 1.0

A jquery plugin imitating the Google Images page behaviour with a twist.

Live Ajax demo : http://www.oriongunning.com/demo/gridder-ajax/demo.php

You don't like ajax? You can use this version: https://github.com/oriongunning/gridder

## Get Started

### Include
```html
<link href="css/gridder-ajax.css" rel="stylesheet">
<script src="js/gridder-ajax.js"></script>
```

### The Markup
```html
<div class="gridder-list">
	
  <li class="item  item_1">
    <a href="item_4" title="Item 4" class="link">
      <img src="http://lorempixel.com/300/200/food/?date=6">
      <span class="title">Item 4</span>
      <span class="description">A small Description</span>
    </a>
    <span class="selectedBox"></span>
  </li>
  
</div>
```

### Fire it up
```javascript
<script>
$(function() {

	// Call Gridder
	$('.gridder-list').GridderAjax();

});
</script>
```

