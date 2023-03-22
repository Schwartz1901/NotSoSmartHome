import React, {useState} from "react";
import { View, Text, Image, Button } from "react-native";
const Home = ({navigation}) => {
    return (
        <View>
            <Text>
                Home
            </Text>
            <Button
        title="Go to Login Screen"
        onPress={() => navigation.navigate("Login")}
      />
        </View>
    )
};

export default Home;