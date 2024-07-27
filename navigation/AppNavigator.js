// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../quizapp/Splash';
import QuizApp from '../quizapp/QuizApp';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Quiz" component={Splash}  />
        <Stack.Screen name="QuizApp" component={QuizApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;