import React from 'react';
import { Button } from 'react-native';
import Mailer from 'react-native-mail';

const sendEmail = () => {
  Mailer.mail({
    subject: 'Need help',
    recipients: ['kc7352004@gmail.com'],
    body: '<b>Bolded Body Content</b>',
    isHTML: true,
  }, (error, event) => {
    if (error) {
      console.log('Email Error:', error);
    }
    console.log('Email Event:', event);
  });
};

// Example usage in a component
const ReactEmail = () => {
  return (
    <Button
      title="Send Email"
      onPress={sendEmail}
    />
  );
};

export default ReactEmail;