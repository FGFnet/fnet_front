import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import HomeScreen from './screens/home/home';
import {PaperProvider} from './providers';

const App = () => {
  return (
    <PaperProvider>
      <HomeScreen/>
    </PaperProvider>
  )
}

export default App;
