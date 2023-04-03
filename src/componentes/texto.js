import React from "react";
import { StyleSheet,Text } from "react-native";


// Aqui estamos padronizando a font montserrat no nosso projeto 
export default function Texto({ children , style}) {

    let estilo = estilos.texto; 
    if (style?.fontWeight === 'bold'){  //a interrogação e paraverificar se o componente tem estilo.
        estilo = estilos.textoBold;
    }

    return <Text style={[style , estilo]}> { children } </Text>
};

const estilos = StyleSheet.create({
    texto: {
        fontFamily: 'montNormal',
        fontWeight: 'normal',
    }, 
    textoBold:{
        fontFamily: 'montBold',
        fontWeight: 'normal',
    }
});