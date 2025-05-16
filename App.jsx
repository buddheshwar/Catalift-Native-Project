import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeTab from './src/component/HomeTab';
import SignUpTab from './src/component/SignUpTab';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeTab} options={{ headerShown: false } }/>
        <Stack.Screen name="SignUp" component={SignUpTab} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}