import React from 'react';

import {ClockProvider} from './context/clockContext';
import Home from './screens/Home';

function App(): JSX.Element {
  return (
    <ClockProvider>
      <Home />
    </ClockProvider>
  );
}

export default App;
