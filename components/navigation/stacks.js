import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {Login, Home, Register, ForgotPassword} from "../../screens";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    );
}

const LoginStackNavigator = () => {
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}/> 
    </Stack.Navigator>
}

export {HomeStackNavigator, LoginStackNavigator};


