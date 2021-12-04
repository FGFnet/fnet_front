import React, {Component} from 'react';

import {PaperProvider, NavigationProvider} from './providers';

const App = () => {
  return (
    <PaperProvider>
      <NavigationProvider/>
    </PaperProvider>
  )
}

export default App;
