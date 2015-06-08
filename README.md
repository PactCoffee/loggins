loggins
=======

> Pact's component library for any web-related projects


Todo
====

- [ ] Pull in fonts properly
- [ ] Add navigation & routing
- [ ] Get unit testing up and running
- [ ] Write readme for adding components to the library


This repo serves two purposes:

1. A central module for reusable react components, and common styles that we can use across a variety of different projects
2. A styleguide to describe where and how the components should be used


Using the components in your project
------------------------------------

Import the components you want:

```js
import {Btn, Link} from 'loggins';
```

Then use them how you wish in your React project. Webpack is required as we're doing fancy stuff with it — check out the [example](https://github.com/PactCoffee/loggins/blob/master/examples/) to get an idea of how to use it.


Running the styleguide locally
------------------------------

```bash
$ npm start
$ open http://localhost:8080
```

Any changes you make to any CSS or JS file will live-reload inside the browser you have open. Pretty slick.


Exporting all CSS
-----------------

```bash
$ npm run build
$ cd dist
```

Inside `dist` will be `styles.css`, which will contain all the CSS from all the components.


Run the example
---------------

Looking at the [basic example](https://github.com/PactCoffee/loggins/blob/master/examples/basic.js), you can see all we're doing is `import`ing the `Btn` component from the component library. Now run webpack in that folder:

```bash
$ cd examples
$ webpack
```

You should see two files outputted inside the `dist` folder: `basic.js` and `style.css`. The CSS file is automatically generated from the components that are imported by the basic example file. The JS file is just a react component that you could render in a browser or whatever.


Usage notes
-----------

- `import`ing components and using `extends` with the CSS must be done with relative paths.
- Livereload works for pretty much everyting _apart from_ when you add/edit/delete CSS variables (they're loaded in once on the first build)
- If you need to un-do legacy styles, add an addittional rule to `globals/reset.css`, so we can easily remove them later

