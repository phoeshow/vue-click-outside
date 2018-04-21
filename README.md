# vue-click-outside

> Vue-click-outside directive.


## Install

Install this with global.
``` javascript
// main.js
import Vue from 'vue'
import VueClickOutside from 'vue-click-outside'

Vue.use(VueClickOutside)

```
Or you can use this in component
``` javascript
import { clickOutside } from 'vue-click-outside'

export default {
  ...
  directives: {
    clickOutside
  }
}

```

## Usage

``` html
<div>
  <p v-click-outside="toggle">Hello world</p>
</div>
```

``` javascript
  {
    methods: {
      toggle () {
        this.show = !this.show
      }
    }
  }
```

``` bash

```

