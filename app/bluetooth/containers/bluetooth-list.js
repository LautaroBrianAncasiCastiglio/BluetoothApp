import React, { useEffect, useState } from "react";
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
import BluetoothSerial, { disable } from 'react-native-bluetooth-serial-next'//npx react-native link react-native-bluetooth-serial-next

function BluetoothListLayout(props){

    const[lista, setLista] = useState([]);
    const[bolEnable, setBolEnable] = useState(false)

    const renderEmpty = () => <Empty text="No hay dispositivos"/>
    const renderItem = ({item}) => {
        return <Device{...item} iconLeft={require =('../../icons/ic_device.png')} iconRight={require =('../../icons/settings.png')}/>
    };


    useEffect(() => {
        async function init(){
            const enable = await BluetoothSerial.requestEnable();
            const lista = await BluetoothSerial.list();
            setLista(lista)
            setBolEnable(enable)
            console.log(lista)
        }
        init();

        return()=>{
            async function remove() {
                await BluetoothSerial.stopScanning();
                console.log('Termino Escaner')
            }

            remove();
        }
    }, [])

    const enableBluetooth = async () =>{
        try{
            await BluetoothSerial.requestEnable();
            const lista = await BluetoothSerial.list();
            await BluetoothSerial.stopScanning();
            setBolEnable(false);
            setLista(lista);
            }catch(error){
            console.log(error)
            }
        };
        

    const disableBluetooth = async () =>{
    try{
        await BluetoothSerial.disable();
        await BluetoothSerial.stopScanning();
        setBolEnable(false);
        setLista([]);
        }catch(error){
        console.log(error)
        }
    };
    

    const toggleBluetooth = value =>{
        if(value){
            return enableBluetooth();
        }
        disableBluetooth()
    };

    
    return(
        <Layout title='Bluetooth'>
            <Toggle value={bolEnable} onValueChange={toggleBluetooth}/>
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