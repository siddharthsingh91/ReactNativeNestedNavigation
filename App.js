import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNave from './Navigation/BottomNave';
import DrawNave from './Navigation/DrawNave';
import Login from './Screen/Login';
import Signup from './Screen/Signup';

const Stack = createNativeStackNavigator();



export default DrawNave;

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