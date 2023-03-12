import React from "react";
import { View, Text, Image } from "react-native";
import { house_icon } from "../constants/icons";
const Loading = () => {
    return (
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        }}>
            <Image style={{marginBottom:40,}} source={house_icon}></Image>
        </View>
    )
}

export default Loading;