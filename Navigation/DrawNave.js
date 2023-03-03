import * as React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, DrawerActions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomNave from '../Navigation/BottomNave'; 
import Profile from '../Screen/Profile';
import Chat from '../Screen/Chat';  
import Setting from '../Screen/Setting';
import { createDrawerNavigator } from '@react-navigation/drawer';
const DrawerNav = createDrawerNavigator();

export default function DrawNave(){
    return (
      <NavigationContainer>
      <DrawerNav.Navigator initialRouteName="BottomNave" 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
      }}>
        
        <DrawerNav.Screen name='Dash' component={BottomNave} />
        <DrawerNav.Screen name='Profile' component={Profile} />
        <DrawerNav.Screen name='Chat' component={Chat} />
        <DrawerNav.Screen name='Setting' component={Setting} />
      </DrawerNav.Navigator></NavigationContainer>
    )
  }
  