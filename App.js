import { Button, StyleSheet, Text, View, TouchableOpacity, DrawerActions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNave from './Navigation/BottomNave';

import Dashboard from './Screen/Dashboard'; 
import Profile from './Screen/Profile';
import Login from './Screen/Login';
import Chat from './Screen/Chat';  
import Setting from './Screen/Setting';
import Signup from './Screen/Signup';

const Stack = createNativeStackNavigator();
const DrawerNav = createDrawerNavigator();

export default function Drawer(){
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


//export default 
const MyStack = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown:false }}>
        <Stack.Screen name='BottomNave' component={BottomNave}/>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow:{
   shadowColor : '#000',
   shadowOffset : {
    width :0,
    height: 10
   }, 
   shadowOpacity:0.25,
   shadowRadius:3.5,
   elevation:5
  }
});