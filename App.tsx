import React from 'react';
import {
  StatusBar,
  StyleSheet,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppContextProvider } from './src/context/AppContext';
import Navigation from './src/navigation';
import useColorScheme from './src/hooks/useColorScheme';

function App(): JSX.Element {
	const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <AppContextProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </AppContextProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
