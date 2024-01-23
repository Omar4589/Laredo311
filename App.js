import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import Navigation from './src/navigation/NavigationContainer';

function App() {
  return (
    <>
      <StatusBar />
      <Navigation />
    </>
  );
}

export default App;
