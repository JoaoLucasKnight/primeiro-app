import React from 'react';
import { StatusBar , SafeAreaView, View } from 'react-native';
import { useFonts,
Montserrat_400Regular,
Montserrat_700Bold,
Montserrat_400Regular_Italic
 } from '@expo-google-fonts/montserrat';

import Cestas from './src/telas/cestas';

export default function App() {

  const [fonteCarregada] =useFonts ({
    "montNormal": Montserrat_400Regular,
    "montBold": Montserrat_700Bold,
    "montItalic": Montserrat_400Regular_Italic,
  })

  if(!fonteCarregada){
    return <View/>
  }



  return (
    <SafeAreaView >
      <StatusBar />
      < Cestas />
    </SafeAreaView>
  );
}

