Styleguide
==========


Importing components
--------------------

When interacting with this library from outside, you can simply `import Btn from 'loggins/Btn'`.

However, when importing the components from within the library to document, you must import the specific component you require e.g. `import Btn from 'components/Btn/Btn'`. This is to make sure that when building the full CSS file for all the components, we don't also export the styleguide layout styles.


Writing styles
--------------

Don't expect CSS classnames being something you can rely on to style elements.
Instead, when you want to use a utility or modifier, import it explicitely into your component:

```jsx
import styles from 'styles';
import {* as u} from 'utilities';

// Bad
<Component style="someStyle u-mtm"}/>
<Component style={styles.root + ' u-mtm'}/>

// Good
<Component style={[styles.root, u.mtm].join(' ')}/>
```

The way the styling system works kinda means you need to throw out everything you've learnt about authoring maintainable CSS at scale. The upsides are fantastic however:

- Explicit rule usage means: 
  - no cruft build up
  - no side effects
- Using the JS syntax to refer to a style (e.g. `styles.myRule`) means the actual CSS output can have whatever selectors we want — even just a hash if we want to save a few extra bytes
