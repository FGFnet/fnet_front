import * as React from 'react';
import {
  configureFonts,
  DefaultTheme,
  Provider as ReactNativePaperProvider,
} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {Colors} from '../constants';

const fontConfig = {
  regular: {
    fontFamily: 'NanumSquareRoundB',
  },
  medium: {
    fontFamily: 'NanumSquareRoundL',
  },
  light: {
    fontFamily: 'NanumSquareRoundL',
  },
  thin: {
    fontFamily: 'NanumSquareRoundL',
  }
}

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    accent: Colors.accent,
    text: Colors.darker,
    placeHolder: Colors.light
  },
  fonts: fontConfig
};

export function PaperProvider({children}: {children: React.ReactNode}) {
  return (
    <ReactNativePaperProvider theme={theme}
      settings={{
        icon: props=><Ionicons {...props}/>
      }}
    >
      {children}
    </ReactNativePaperProvider>
  );
}

