import React, { useEffect } from 'react';

import { PaperProvider, NavigationProvider } from './providers';
import { Provider as ReduxProvider } from 'react-redux';
import { makeStore } from './store/makeStore';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  const store = makeStore()
  useEffect(()=> {
    let timer = setTimeout(()=>{SplashScreen.hide();}, 0);
    return () => {
      clearTimeout(timer);
    }
  });

  return (
    <PaperProvider>
      <ReduxProvider store={store}>
        <NavigationProvider/>
      </ReduxProvider>
    </PaperProvider>
  )
}

export default App;
