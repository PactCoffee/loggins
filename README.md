loggins
=======

> Pact's component library for any web-related projects


This repo serves two purposes:

1. A central module for reusable react components, and common styles that we can use across a variety of different projects
2. A styleguide to describe where and how the components should be used


Using the components in your project
------------------------------------

Import the components you want:

```js
import Btn from 'loggins/components/Btn/Btn.js';

export default (
  <Btn>My button!</Btn>
);
```

Then use them how you wish in your React project. Webpack is required as we're doing fancy stuff with it — check out the [example](https://github.com/PactCoffee/loggins/blob/master/examples/) to get an idea of how to use it.


Running the styleguide locally
------------------------------

This repo pulls in FontPack, our package of fonts. This is a private module on npm, meaning there's privileged access. **You need to set `NPM_TOKEN` as an environmental variable on your system to be able to access FontPack and therefore `npm install` without issue**.

[Checkout this quick readme](https://gist.github.com/iest/58692bf1001b0424c257) on how to set up env vars on your system.

```bash
$ npm run dev
$ open http://localhost:8080
```

Any changes you make to any CSS or JS file will live-reload inside the browser you have open. Pretty slick.

**Please note**: If you want to run the styleguide locally, make sure to move the loggins folder outside of any `node_modules` folder you might have it inside. For some reason the hot-reloading doesnt't work if that's the case.


Publishing a new version
------------------------

1. Pull down latest master. Then on master,
1. `npm version [major|minor|patch]` (see below for which one to use)
1. npm will automatically check to make sure the build succeeds and all tests pass
1. `git push upstream master && git push upstream master --tags`
1. `npm publish`

When to use what:

- `major`: A change where a consumer of this library will have to **change their code** to work with this new version
- `minor`: Adding a new feature, or making a major internal change **without outward-facing consequences**
- `patch`: Fixing a small bug, typo, or other small change

We need to write a bash script to automate this, but the above will work for now.

**Do not create tags as part of pull requests**. Adding new features to master is different to publishing a version to npm.



Deployment
----------

All pushes to master will trigger a rebuild on herkoku on https://loggins.herokuapp.com


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

