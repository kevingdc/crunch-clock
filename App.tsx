import React from 'react';

import {ClockProvider} from './app/context/clockContext';
import Home from './app/screens/Home';

function App(): JSX.Element {
  return (
    <ClockProvider>
      <Home />
    </ClockProvider>
  );
}

export default App;
