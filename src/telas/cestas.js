
import React from "react";
import { Image, StyleSheet, Dimensions, Text, View} from "react-native";

import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';


const width = Dimensions.get('screen').width;


export default function Cestas(){
        return <>
            <Image source={topo} style={estilos.topo} />
            <Text style={estilos.titulo} >Detalhes da cesta</Text>

            <View style={estilos.corpo}>
                <Text style={estilos.nome }>Cesta de Verduras</Text>

                <View style={estilos.fazenda} >
                    <Image source={logo} style={estilos.imagemFazenda}/>
                    <Text style={estilos.nomefazenda}>Fazenda Cachorro  Bravo</Text>
                </View>
                
                <Text style={estilos.descricao}>Uma cesta de produtos selecionados cuidadosamente da fazenda diretamente para a sua cozinha</Text>
                <Text style={estilos.preco}>40,00</Text>
            </View>
        </>
        
    }

// estilos     
    const estilos = StyleSheet.create({
        topo:{
            width: "100%",
            height: 578/768*width,
        },
        titulo: {
            width: "100%",
            position: "absolute",
            textAlign: "center",
            fontSize: 16,
            lineHeight: 26,
            color:"white",
            fontWeight:"bold",
            padding: 16,

        },
        corpo:{
            paddingVertical: 8,
            paddingHorizontal: 16,

        },

        nome: {
            color: "#464646",
            fontSize: 26,
            lineHeight: 42,
            fontFamily: "montBold",
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
            fontFamily: "montNormal",
        },
        
        descricao:{
            color: "#A3A3A3",
            lineHeight: 16,
            fontSize: 16, 
        },

        preco: {
            color:"#2A9F85",
            fontWeight: "bold",
            fontSize:26,
            lineHeight: 42,
            marginTop: 8
        }
    });

    //11:41