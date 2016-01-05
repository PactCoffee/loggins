import React from 'react';
import Markdown from 'matthewmueller-react-remarkable';

import * as m from 'globals/modifiers.css';
import styles from './Home.css';

export default class Home {
  render() {
    return (
      <div>
        <div style={{ maxWidth: '40em', margin: '0 auto' }} className={m.alignc}>
          <span className={styles.loggins}/>

          <Markdown>{`
            # Loggins

            _Pact's styleguide & component library_

          `}</Markdown>

          <div className={[m.alignl, m.mtl].join(' ')}>
            <Markdown>{`
              ## Well, hello there

              Loggins is a library we use at Pact to build our interfaces with. Components are built with react and modularised CSS.


              It's a living styleguide in the _truest_ sense of the word; this site auto-deployed on every push to master, and the components within are interactive.

              ## Component ground rules

              ### 1. Be flexible to surroundings
              Components themselves don't contain media queries or anything else that alter their display at various shapes and sizes. While some components have specific widths, most will simply fit to the container they're placed in.

              ### 2. Go for composability
              Break components down into the smallest useful level of functionality, then put them together to solve common use cases. An example of this is the [HoverCard][1], which is used by [Dropdown][2] and [TooltipToggle][3]. It could also be consumed directly to build something custom like a modal.

              [1]: https://github.com/PactCoffee/loggins/blob/master/components/HoverCard/HoverCard.js
              [2]: https://github.com/PactCoffee/loggins/blob/master/components/Dropdown/Dropdown.js
              [3]: https://github.com/PactCoffee/loggins/blob/master/components/TooltipToggle/TooltipToggle.js

              ### 3. TBA

            `}</Markdown>
          </div>
        </div>
      </div>
    );
  }
}
