
import React from "react";
import { View, StyleSheet } from "react-native";

import Topo from './comp/topo';
import Desc from './comp/desc';

export default function Cestas({topo, desc}) {
    return <>
        <Topo {...topo} />
            <View style={estilos.corpo}>
                <Desc {...desc} />
            </View>    
     </>
        
    };
    
    const estilos = StyleSheet.create({
        corpo:{
            paddingVertical: 8,
            paddingHorizontal: 16,
        },
    });
