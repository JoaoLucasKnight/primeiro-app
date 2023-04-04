import React from "react";
import {Image, View, StyleSheet, TouchableOpacity} from 'react-native'

import Texto  from"../../../componentes/texto";


export default function Desc({nome, logoFazenda, nomeFazenda, descricao, preco, botao}) {
    return <>
        <Texto style={estilos.nome}> {nome} </Texto>

        <View style={estilos.fazenda} >
            <Image source={logoFazenda}  style={estilos.imagemFazenda}/>
            <Texto style={estilos.nomefazenda}> {nomeFazenda} </Texto>
        </View>
            
        <Texto style={estilos.descricao}> {descricao} </Texto>
        <Texto style={estilos.preco}> {preco} </Texto>

        <TouchableOpacity style={estilos.botao}>
            <Texto style={estilos.textoBotao}> {botao} </Texto>
        </TouchableOpacity>
                    
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
    },
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 8,
        borderRadius: 16,
    },
    textoBotao:{
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 24,
        lineHeight: 32,
    },
});