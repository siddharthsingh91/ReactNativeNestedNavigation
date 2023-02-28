import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TouchableOpacity, DrawerActions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomNave from './Navigation/BottomNave';

import Dashboard from './Screen/Dashboard'; 
import Profile from './Screen/Profile';
import Login from './Screen/Login';
import Chat from './Screen/Chat';  
import Setting from './Screen/Setting';
import Signup from './Screen/Signup';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const DrawerNav = createDrawerNavigator();



export default function Drawer(){
  return (
    <NavigationContainer>
    <DrawerNav.Navigator initialRouteName="Tab" 
    screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e', //Set Header color
      },
      headerTintColor: '#fff', //Set Header text color
    }}>
      
      <DrawerNav.Screen name='Dash' component={Tab} />
      <DrawerNav.Screen name='Profile' component={Profile} />
      <DrawerNav.Screen name='Chat' component={Chat} />
      <DrawerNav.Screen name='Setting' component={Setting} />
    </DrawerNav.Navigator></NavigationContainer>
  )
}
function Tab(){
  return (
    <BottomTab.Navigator
     screenOptions={({ route }) => ({
      tabBarShowLabel: false,
      tabBarStyle: { 
      position: 'absolute', 
      bottom: 25,
      color: '#fff',
      left: 20,
      borderRadius: 15,
      height : 60,
      elevation: 0,
      backgroundColor: 'red',
      right: 20,
      ...styles.shadow
    },

      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        let rn = route.name;

        if (rn === 'Dashboard') {
          iconName = focused ? 'home' : 'home-outline';
          color = focused ? '#fff' : '#ccc';

        } else if (rn === 'Setting') {
          iconName = focused ? 'list' : 'list-outline';
          color = focused ? '#fff' : '#ccc';

        } else if (rn === 'Chat') {
          iconName = focused ? 'settings' : 'settings-outline';
          color = focused ? '#fff' : '#ccc';
        }
        else if (rn === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
          color = focused ? '#fff' : '#ccc';
        }
        else if (rn === 'Login') {
          iconName = focused ? 'log-in' : 'log-in-outline';
          color = focused ? '#fff' : '#ccc';
        }
        
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    >
      <BottomTab.Screen name='Dashboard' component={Dashboard} options={{headerShown:false}}  />
      <BottomTab.Screen name='Setting' component={Setting} />
      <BottomTab.Screen name='Profile' component={Profile} options={{ tabBarButton: (props) => (
        <CustomTabBarButton{ ...props} />
      )}}/>
      <BottomTab.Screen name='Login' component={Login} />
      <BottomTab.Screen name='Chat' component={Chat} />
    </BottomTab.Navigator>
  )
}

//export default 
const MyStack = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown:false }}>
        <Stack.Screen name='Tab' component={Tab}/>
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

const CustomTabBarButton = ({children, onPress }) =>(
  <TouchableOpacity
  style={{
    top:-20,
    justifyContent : 'center',
    alignItems : 'center',
    ...styles.shadow
  }}
   onPress={onPress}
  >
    <View style={{
      width:60,
      height:60,
      borderRadius:35,
      backgroundColor:'#000'
    }}>
      {children}
    </View>
  </TouchableOpacity>
);