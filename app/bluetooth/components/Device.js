import React from "react";
import{
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet
}from 'react-native'
import Separator from "./Separator";

function Device(props){
    return(
        <>
        <TouchableOpacity style={styles.wrapper} onPress={props.onPress}>
        <View style={styles.wrapperLeft}>
            <Image style={styles.iconLeft} source={props.iconLeft}/>
        </View>
        <View style={styles.wrapperName}>
            <Text style={styles.name}>{props.name}</Text>
        </View>
        <Image style={styles.iconRight} source={props.iconRight}/>
        </TouchableOpacity>
        <Separator />
        </>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flexDirection:"row",
        paddingLeft:20,
        paddingRight:20,
        alignItems:'center',
        padding:10,
        justifyContent: 'space-between'
    },
    wrapperLeft:{
        width:40,
        height:40,
        borderRadius:20,
        backgroundColor:'#gray',
        borderWidth:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    iconLeft:{
        width:20,
        width:20
    },
    wrapperName:{
        flex:1,
        justifyContent:'flex-start',
        marginLeft:15
    },
    name:{
        fontSize:18,
        fontWeight:'bold',
        color:'black'
    },
    iconRight:{
        width:20,
        width:20
    }

})

export default Device