import React from 'react';
import { StatusBar , SafeAreaView } from 'react-native';

import { useFonts,
Montserrat_400Regular,
Montserrat_700Bold,
Montserrat_400Regular_Italic
 } from '@expo-google-fonts/montserrat';

 import AppLoading from 'expo-app-loading';

import Cestas from './src/telas/Cesta';
import mock from './src/mocks/cestas';

export default function App() {
  const [fonteCarregada] =useFonts ({
    "montNormal": Montserrat_400Regular,
    "montBold": Montserrat_700Bold,
    "montItalic": Montserrat_400Regular_Italic,
  })

  if(!fonteCarregada){
    return <AppLoading/>
  }

  return (
    <SafeAreaView style={{flex:1}} >
      <StatusBar />
      < Cestas {...mock} /> 
    </SafeAreaView>
  );
}

// o uso do {...mock} e as msm coisa de declarar topo = {mock.topo}  desc={mosck.desc} facilitando a vida o nome é destruction


