import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Tabs } from "./components";
import { Home, AirCondition, Light, Loading, Login } from "./screens";
import { LoginStackNavigator } from "./components/navigation/stacks";

const Stack = createStackNavigator();

const App = () => {
	return (
    	<NavigationContainer>
			<Tabs/>
    	</NavigationContainer>
  	)
}

export default App