Styleguide
==========


Some tips on writing components
-------------------------------

When interacting with this library from outside, you can simply `import Btn from 'loggins/Btn'`.

However, when importing the components from within the library to document, you must import the specific component you require e.g. `import Btn from 'components/Btn/Btn'`. This is to make sure that when building the full CSS file for all the components, we don't also export the styleguide layout styles.
