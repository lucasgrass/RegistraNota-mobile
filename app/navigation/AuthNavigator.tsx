import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Auth/Login';
import CreateUser from '../screens/Auth/CreateUser';
import RecoveryPassword from '../screens/Auth/RecoveryPassword'

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CreateUser" component={CreateUser} />
      <Stack.Screen name="RecoveryPassword" component={RecoveryPassword} />
    </Stack.Navigator>
  );
}
