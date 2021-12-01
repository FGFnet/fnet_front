import * as React from 'react';
import {
  DefaultTheme,
  Provider as ReactNativePaperProvider,
} from 'react-native-paper';

import {Colors} from '../constants';

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
};

export function PaperProvider({children}: {children: React.ReactNode}) {
  return (
    <ReactNativePaperProvider theme={theme}>
      {children}
    </ReactNativePaperProvider>
  );
}
