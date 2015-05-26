loggins
=======

> Pact's component library for any web-related projects

This repo serves two purposes:

1. A central module for all our components, that we can use across different projects
2. A styleguide to describe where and how the components should be used

Using the components
--------------------

Pull the components you want:

```js
import {Btn, Link} from 'loggins';
```

Then use them how you wish in your React project.


Running the styleguide
---------------------

```bash
$ npm run styleguide
$ open http://localhost:8080
```


Run the example
---------------

Looking at the [basic example], you can see all we're doing is `import`ing the `Btn` component from the component library. Now run webpack in that folder:

```bash
$ cd examples
$ webpack
```

You should see two files outputted inside the `dist` folder: `basic.js` and `style.css`. The CSS file is automatically generated from the components that are imported by the basic example file. The JS file is just a react component that you could render in a browser or whatever.

Grab all the CSS for use in another project
-------------------------------------------

```bash
$ npm run build
```

All the CSS used by the components will be found in `./dist/style.css`
