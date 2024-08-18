import React from "react";
import {
    View,
    Text,
    FlatList
} from 'react-native'

function BluetoothListLayout(props){

    const lista = [
        {
            name:'kkk',
            key:'1'
        },
        {
            name:'kkk',
            key:'1'
        },
        {
            name:'kkk',
            key:'1'
        },
        {
            name:'kkk',
            key:'1'
        },
    ]

    return(
        <FlatList
            data={lista}
            renderItem={({lista}) => <Text style={{fontSize:20}}>(item.name)</Text>}
        />
    )
}

export default BluetoothListLayout