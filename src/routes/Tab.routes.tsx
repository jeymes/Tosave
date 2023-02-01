import React from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from '../theme';
import { Home } from '../screens/Home';

import { Plus, AlignLeft } from "react-native-feather";
import { New } from '../screens/New';

const {Navigator, Screen} = createBottomTabNavigator();

export function TabRoutes(){
    return(
        <Navigator
        screenOptions={{
            tabBarStyle: {
                height:70,
                borderTopWidth: 0,
            },   
            tabBarActiveBackgroundColor: theme.COLORS.BACKGROUND,
            tabBarInactiveBackgroundColor:theme.COLORS.BACKGROUND,
            tabBarActiveTintColor: theme.COLORS.PRIMARY,
            tabBarInactiveTintColor: theme.COLORS.SUBTEXT,
            headerShown: false,
            
        }}
        >
            <Screen
            name='home'
            component={Home}
            options={{
                tabBarLabel: '',
                headerShown: false,
                headerTransparent: true,
                tabBarIcon: ({color}) =>(
                    <AlignLeft 
                    stroke={color} 
                    width={32} 
                    height={32} />
                )
                }}
            />
            <Screen
            name='new'
            component={New}
            options={{
                tabBarLabel: '',
                headerShown: false,
                headerTransparent: true,
                tabBarIcon: ({color}) =>(
                    <Plus 
                    stroke={color} 
                    width={32} 
                    height={32} />
                )
                }}
            />
        </Navigator>
    )
}