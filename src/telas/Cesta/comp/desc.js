import React from "react";
import {Image, View, StyleSheet} from 'react-native'

import Texto  from"../../../componentes/texto";


export default function Desc({nome, logoFazenda, nomeFazenda, descricao, preco}) {
    return <>
        <Texto style={estilos.nome}> {nome} </Texto>

        <View style={estilos.fazenda} >
            <Image source={logoFazenda}  style={estilos.imagemFazenda}/>
            <Texto style={estilos.nomefazenda}> {nomeFazenda} </Texto>
        </View>
            
        <Texto style={estilos.descricao}> {descricao} </Texto>
        <Texto style={estilos.preco}> {preco} </Texto>
                    
    </>
};

const estilos = StyleSheet.create({
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    fazenda:{
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda:{
        height: 32,
        width: 32,
    },
    nomefazenda:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao:{
        color: "#A3A3A3",
        fontSize: 16, 
        lineHeight: 26,
    },
    preco: {
        color:"#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
});