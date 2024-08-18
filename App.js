import React from 'react';
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

const App = () => {


  return (
    <>
      <AppNavigator />
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
    </>
  )
};


export default App;