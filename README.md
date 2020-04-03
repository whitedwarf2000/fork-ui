`npm i rc-neumorphism`

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

import {
  Button,
  Tooltip,
} from 'rc-neumorphism';

require('rc-neumophism/lib/rc-neumorphism.css');

const App = () => (
  <div>
    <Button primary icon="home" >
    <Tooltip topRight title="title">
      <a>Hover</a>
    </Tooltip>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
```
