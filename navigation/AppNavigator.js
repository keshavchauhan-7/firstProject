import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../components/LoginScreen';
import ReactFirebase from '../components/ReactFirebase';
// import ToDoList from '../screens/ToDoList';
// import Splash from '../quizapp/Splash';
// import QuizApp from '../quizapp/QuizApp';
// import ResultScreen from '../quizapp/ResultScreen';


const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Quiz" component={Splash} options={{headerShown:false}} />
        <Stack.Screen name="QuizApp" component={QuizApp} options={{headerShown:false}} />
        <Stack.Screen name="ResultScreen" component={ResultScreen} options={{headerShown:false}} /> */}
        {/* <Stack.Screen name="ToDoList" component={ToDoList} /> */}
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: "Firebase Account" }} />
        <Stack.Screen name="UserAddScreen" component={ReactFirebase} options={{ title: 'User Management' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
