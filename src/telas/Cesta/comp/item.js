import React from "react";
import { Image, View, StyleSheet } from "react-native";
import Texto from "../../../componentes/texto";

export default function Itens( {titulo, lista} ){
    return<>
        <Texto style={estilos.titulo} > {titulo} </Texto> 
            {lista.map (({nome, imagem}) =>{
                return <View style={estilos.div} key={nome}>
                            <Image source={imagem}/>
                            <Texto> { nome } </Texto> 
                        </View>
            })}
    </>
};


const estilos = StyleSheet.create({

    
    titulo:{
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },

    div: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 8,
        alignItems: "center"
    },

    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    },
    imagem: {
        width: 46,
        height: 46,
    }

});


/* 
Feito desta forma, mas este carregada todos os itens de uma vez com o flat apenas carrega aoenas os itens que aparece na tela ajudando a otimizar o apk 

{lista.map (({nome, imagem}) =>{
    return <View style={estilos.div} key={nome}>
                <Image source={imagem}/>
                <Texto> { nome } </Texto> 
            </View>
})} */