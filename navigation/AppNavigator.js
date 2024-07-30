import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../quizapp/Splash';
import QuizApp from '../quizapp/QuizApp';
import ResultScreen from '../quizapp/ResultScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Quiz" component={Splash} />
        <Stack.Screen name="QuizApp" component={QuizApp} />
        <Stack.Screen name="ResultScreen" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
