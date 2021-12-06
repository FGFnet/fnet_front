import React, {useEffect} from 'react';

import {PaperProvider, NavigationProvider} from './providers';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(()=> {
    let timer = setTimeout(()=>{SplashScreen.hide();}, 0);
    return () => {
      clearTimeout(timer);
    }
  });

  return (
    <PaperProvider>
      <NavigationProvider/>
    </PaperProvider>
  )
}

export default App;
