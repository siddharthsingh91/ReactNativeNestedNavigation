import * as React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, DrawerActions} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Section from '../Tab/Section'; 
import SectionOne from '../Tab/SectionOne';
import SectionTwo from '../Tab/SectionTwo';
import SectionThree from '../Tab/SectionThree';  
import SectionFour from '../Tab/SectionFour';
//Setting, Profile , Login, Chat } from 'react';

const PageTab = createBottomTabNavigator();

function BottomNave(){
return (
    <PageTab.Navigator
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

        if (rn === 'Section') {
          iconName = focused ? 'home' : 'home-outline';
          color = focused ? '#fff' : '#ccc';

        } else if (rn === 'SectionOne') {
          iconName = focused ? 'list' : 'list-outline';
          color = focused ? '#fff' : '#ccc';

        } else if (rn === 'SectionTwo') {
          iconName = focused ? 'settings' : 'settings-outline';
          color = focused ? '#fff' : '#ccc';
        }
        else if (rn === 'SectionThree') {
          iconName = focused ? 'person' : 'person-outline';
          color = focused ? '#fff' : '#ccc';
        }
        else if (rn === 'SectionFour') {
          iconName = focused ? 'log-in' : 'log-in-outline';
          color = focused ? '#fff' : '#ccc';
        }
        
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    >
      <PageTab.Screen name='Section' component={Section} options={{headerShown:false}}  />
      <PageTab.Screen name='SectionOne' component={SectionOne} />
      <PageTab.Screen name='SectionTwo' component={SectionTwo} options={{ tabBarButton: (props) => (
        <CustomTabBarButtonTwo{ ...props} />
      )}}/>
      <PageTab.Screen name='SectionThree' component={SectionThree} />
      <PageTab.Screen name='SectionFour' component={SectionFour} />
    </PageTab.Navigator>
  )
}

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

  const styles = StyleSheet.create({
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

  const CustomTabBarButtonTwo = ({children, onPress }) =>(
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

export default BottomNave;