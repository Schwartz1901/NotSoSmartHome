import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Tabs } from "./components";
import { Home, AirCondition, Light, Loading, Login } from "./screens";

const Stack = createStackNavigator();

const App = () => {
	return (
    	<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false
				}}
				initialRouteName={"Home"}
			>
				<Stack.Screen name="Home" component={Tabs} />
				<Stack.Screen name="AirCondition" component={AirCondition} />
				<Stack.Screen name="Light" component={Light} />
				<Stack.Screen name="Loading" component={Loading} />
				<Stack.Screen name="Login" component={Login} />
			</Stack.Navigator>
    	</NavigationContainer>
  	)
}

export default App