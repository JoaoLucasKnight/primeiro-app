import React from 'react';
import { StatusBar , SafeAreaView } from 'react-native';

import Cestas from './src/telas/cestas';

export default function App() {
  return (
    <SafeAreaView >
      <StatusBar />
      < Cestas />
    </SafeAreaView>
  );
}

