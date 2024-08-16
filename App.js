import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StripeProvider } from '@stripe/stripe-react-native';
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
import PaymentScreen from './components/PaymentScreen';
import ReactEmail from './components/ReactEmail';
import ReactFirebase from './components/ReactFirebase';
import ChatGpt from './components/ChatGpt';

import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '938006152827-46rgh2c6qcucb495iglkaq1n4kfbj0p2.apps.googleusercontent.com',
});
const App = () => {

  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      auth().signInWithCredential(googleCredential);

      console.log('user sign in successfully')
    } catch (err) {
      console.error(err);
    }
    // Check if your device supports Google Play
  }


  return (
    <>

      <View>
        <TouchableOpacity onPress={onGoogleButtonPress}>
          <Text>sign in with google</Text>
        </TouchableOpacity>
      </View>




      {/* <AppNavigator /> */}
      {/* <Home />; */}
      {/* <Kyc /> */}
      {/* <Pdf/> */}
      {/* <AboutUs/> */}
      {/* <ReactTable/> */}
      {/* <ReactVectorIcons/> */}
      {/* <ReactToast/> */}
      {/* <ReactWebView/> */}
      {/* <QuizApp/>  */}
      {/* <StripeProvider publishableKey="pk_test_51PgO1VRsVlmQY2pORxX6YEEVgdq2gYoauG5vttrWmLKQoVGqdTVUv5qa4EciEGiSfo4sJW5a8DdkgaEy7c9tYtVk00YmZGBtWP">
        <PaymentScreen />
      </StripeProvider> */}
      {/* <ReactEmail/> */}
      {/* <ReactFirebase /> */}
      {/* <ChatGpt/> */}


    </>
  )
};


export default App;