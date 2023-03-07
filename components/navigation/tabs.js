import React from "react";
import { View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";

import { Home } from "../../screens";

import { COLORS_Light, icons } from "../../constants";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                "tabBarShowLabel": false,
                "tabBarStyle": [
                    {
                        "display": "flex"
                    },
                    null
                ]
            }}
        >
            <Tab.Screen 
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source={icons.home_focused}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS_Light.background_constrast : COLORS_Light.lightBlue
                            }}
                        />
                    )
                }}
            />
             <Tab.Screen 
                name="Schedule"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source={icons.schedule_focused}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS_Light.background_constrast : COLORS_Light.lightBlue
                            }}
                        />
                    )
                }}
            />
             <Tab.Screen 
                name="Scripts"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source={icons.document_focused}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS_Light.background_constrast : COLORS_Light.lightBlue
                            }}
                        />
                    )
                }}
            />
             <Tab.Screen 
                name="Settings"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source={icons.setting_focused}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS_Light.background_constrast : COLORS_Light.lightBlue
                            }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;