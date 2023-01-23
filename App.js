import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const DrawerNav = createDrawerNavigator();

function Login({navigation}){
  return (
    <View style={styles.container}>
      <Text>Login Page</Text>
      <Button onPress={() => navigation.navigate('Signup')}
      title='Need an account?'  />
    </View>
  )
}
function Signup({navigation}){
  return (
    <View style={styles.container}>
      <Text>Login Page</Text>
      <Button onPress={() => navigation.navigate('Tab')}
      title='Need To Login?'  />
    </View>
  )
}
function Dashboard({navigation}){
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      <Button title='Logout' onPress={() => navigation.navigate('Login')} />
    </View>
  )
}
function Setting(){
  return (
    <View style={styles.container}>
      <Text>Settings Page</Text>
    </View>
  )
}
function Profile(){
  return (
    <View style={styles.container}>
      <Text>Profile Page</Text>
    </View>
  )
}
function Chat(){
  return (
    <View style={styles.container}>
      <Text>Chat Room</Text>
    </View>
  )
}
function Drawer(){
  return (
    <DrawerNav.Navigator>
      <DrawerNav.Screen name='Dashboard' component={Dashboard} />
      <DrawerNav.Screen name='Profile' component={Profile} />
      <DrawerNav.Screen name='Chat' component={Chat} />
    </DrawerNav.Navigator>
  )
}
function Tab(){
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name='Dashboard' component={Drawer} options={{headerShown:false}} />
      <BottomTab.Screen name='Setting' component={Setting} />
    </BottomTab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown:false }}>
        <Stack.Screen name='Tab' component={Tab} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
