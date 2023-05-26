import React from 'react';
import {NativeBaseProvider} from 'native-base';
import Home from './src/pages/Home';
import {NavigationContainer} from '@react-navigation/native';
import AddEntry from './src/pages/AddEntry';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserDetailed from './src/pages/UserDetailed';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      {/* make navigation container look modern */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerBackVisible: false,
              headerShown: false,
              animation: 'default',
              headerBackTitleVisible: false,
            }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{
              headerBackVisible: false,
              headerShown: false,
              animation: 'default',
              headerBackTitleVisible: false,
            }}
            name="AddEntry"
            component={AddEntry}
          />
          <Stack.Screen
            options={{
              headerBackVisible: false,
              headerShown: false,
              animation: 'default',
              headerBackTitleVisible: false,
            }}
            name="UserDetailed"
            component={UserDetailed}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
