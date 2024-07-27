import React from 'react';
import Home from './components/Home';
import Kyc from './components/Kyc';
import Pdf from './components/Pdf';
import AboutUs from './components/AboutUs';
import ReactTable from './components/ReactTable';
import ReactVectorIcons from './components/ReactVectorIcons';
import ReactToast from './components/ReactToast';
import ReactWebView from './components/ReactWebView';
import QuizApp from './quizapp/QuizApp';
import AppNavigator from './navigation/AppNavigator';
const App = () => {
  return (
    <>
    <AppNavigator/>
      {/* <Home />; */}
      {/* <Kyc /> */}
      {/* <Pdf/> */}
      {/* <AboutUs/> */}
      {/* <ReactTable/> */}
      {/* <ReactVectorIcons/> */}
      {/* <ReactToast/> */}
      {/* <ReactWebView/> */}
      {/* <QuizApp/>  */}
    </>
  )
};
export default App;


// import * as React from 'react';
// import { Button, View } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';


// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }


// import React from 'react';
// import { Button } from 'react-native';
// import Mailer from 'react-native-mail';

// const sendEmail = () => {
//   Mailer.mail({
//     subject: 'Need help',
//     recipients: ['kc7352004@gmail.com'],
//     body: '<b>Bolded Body Content</b>',
//     isHTML: true,
//   }, (error, event) => {
//     if (error) {
//       console.log('Email Error:', error);
//     }
//     console.log('Email Event:', event);
//   });
// };

// // Example usage in a component
// const App = () => {
//   return (
//     <Button
//       title="Send Email"
//       onPress={sendEmail}
//     />
//   );
// };

// export default App;