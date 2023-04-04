
import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Texto from "../../componentes/texto";

import Topo from './comp/topo';
import Desc from './comp/desc';
import Item from './comp/item';

export default function Cesta({topo, desc, itens}) {
    return <>
        <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome }
        ListHeaderComponent={() => {
            return <>
            <Topo {...topo} />
            <View style={estilos.corpo}>
                <Desc {...desc} />
                <Texto style={estilos.titulo}>{ itens.titulo }</Texto>
            </View>
            </>
        }}
        />
    </>
        
    };
    
    const estilos = StyleSheet.create({
        titulo: {
            color: "#464646",
            fontWeight: "bold",
            marginTop: 32,
            marginBottom: 8,
            fontSize: 20,
            lineHeight: 32,
          },

        corpo:{
            paddingVertical: 8,
            paddingHorizontal: 16,
        },
    });
