import * as React from 'react';
import {
  configureFonts,
  DefaultTheme,
  Provider as ReactNativePaperProvider,
} from 'react-native-paper';

import {Colors} from '../constants';

const fontConfig = {
  web: {
    regular: {
      fontFamily: 'NanumSquareRoundB',
      fontWeight: 'normal'
    },
    medium: {
      fontFamily: 'NanumSquareRoundR',
      fontWeight: 'normal'
    },
    light: {
      fontFamily: 'NanumSquareRoundL',
      fontWeight: 'bold'
    },
    thin: {
      fontFamily: 'NanumSquareRoundL',
      fontWeight: 'normal'
    }
  },
  ios: {
    regular: {
      fontFamily: 'NanumSquareRoundB',
      fontWeight: 'normal'
    },
    medium: {
      fontFamily: 'NanumSquareRoundR',
      fontWeight: 'normal'
    },
    light: {
      fontFamily: 'NanumSquareRoundL',
      fontWeight: 'bold'
    },
    thin: {
      fontFamily: 'NanumSquareRoundL',
      fontWeight: 'normal'
    }
  },
  android: {
    regular: {
      fontFamily: 'NanumSquareRoundB',
      fontWeight: 'normal'
    },
    medium: {
      fontFamily: 'NanumSquareRoundR',
      fontWeight: 'normal'
    },
    light: {
      fontFamily: 'NanumSquareRoundL',
      fontWeight: 'bold'
    },
    thin: {
      fontFamily: 'NanumSquareRoundL',
      fontWeight: 'normal'
    }
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
  fonts: configureFonts(fontConfig),
};

export function PaperProvider({children}: {children: React.ReactNode}) {
  return (
    <ReactNativePaperProvider theme={theme}>
      {children}
    </ReactNativePaperProvider>
  );
}
