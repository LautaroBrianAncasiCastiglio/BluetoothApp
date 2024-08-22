import React from "react";
import{
    View,
    Text,
    StyleSheet,
} from 'react-native'

function Empty(props){
    return(
        <View style={StyleSheet.text}>{props.text}</View>
    )
}
const styles = StyleSheet.create({
    text:{
        fontSize:20
    }
})
export default Empty