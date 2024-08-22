import React from "react";
import {
    View,
    Text,
    FlatList
} from 'react-native'
import Layout from '../components/bluetooth-list-layout' 
import Empty from '../components/Empty'
import Toggle from '../components/Toggle'
import Subtitle from '../components/Subtitle'
import Device from '../components/Device'
import BluetoothSerial from 'react-native-bluetooth-serial-next'//npx react-native link react-native-bluetooth-serial-next

function BluetoothListLayout(props){

    const lista = [
        {
            name:'kkk',
            key:'1'
        },
        {
            name:'kra',
            key:'2'
        },
        {
            name:'kat',
            key:'3'
        },
        {
            name:'toa',
            key:'4'
        },
    ]

    const renderEmpty = () => <Empty text="No hay dispositivos"/>
    const renderItem = ({item}) => {
        return <Device{...item} iconLeft={require =('../../icons/ic_device.png')} iconRight={require =('../../icons/settings.png')}/>
    };

    return(
        <Layout title='Bluetooth'>
            <Toggle/>
            <Subtitle title='Lista Dispositivos'/>
        <FlatList
            data={lista}
            ListEmptyComponent={renderEmpty}
            renderItem={renderItem}
        />
        </Layout>
    )
}

export default BluetoothListLayout