
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import Topo from './comp/topo';
import Desc from './comp/desc';
import Itens from './comp/item';

export default function Cestas({topo, desc, itens}) {
    return <ScrollView>
         <Topo {...topo} />
            <View style={estilos.corpo}>
                <Desc {...desc} />
                <Itens {...itens} />
            </View>  
    </ScrollView>
        
    };
    
    const estilos = StyleSheet.create({
        corpo:{
            paddingVertical: 8,
            paddingHorizontal: 16,
        },
    });
