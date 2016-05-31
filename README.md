Gridder Ajax
=======
<a href='https://ko-fi.com/A748382' target='_blank'><img height='32' style='border:0px;height:32px;' src='https://az743702.vo.msecnd.net/cdn/kofi1.png?v=a' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a> 

Version : 1.0

A jQuery plugin that displays a thumbnail grid expanding preview similar to the effect seen on Google Images.

We have all searched images on Google, so you probably noticed the interesting expanding preview when you click 
on a thumbnail. It’s a very nice effect and practical, allowing you quickly see more details without having to 
reload a new page. This plugin allows you to recreate a similar effect on a thumbnail grid. The idea is to open
a preview when clicking on a thumbnail and to show a larger image and some other content like a title, a description 
and a link

**VIEW DEMO** : http://www.oriongunning.com/demo/gridder-ajax/demo.php

Too complicated? You can use this static version: https://github.com/oriongunning/gridder

## Get Started

### Include
```html
<link href="css/gridder-ajax.css" rel="stylesheet">
<script src="js/gridder-ajax.js"></script>
```

### The Markup
```html
<div class="gridder-list">
	
  <li class="item  item_1 do-expand-item">
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
    jQuery(document).ready(function ($) {

        // Call Gridder Ajax with
        // default options

        $('.gridder-list').GridderAjax({
            scrollOffset: 0,
            rootUrl: "/",
            animationSpeed: 600,
            animationEasing: "easeInOutExpo"
        });
    });

</script>
```

