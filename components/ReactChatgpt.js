import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, ScrollView, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

const OPENAI_API_KEY = 'enter your key';

const ReactChatgpt = () => {
  const [messages, setMessages] = useState([{ text: 'Hello! How can I assist you today?', sender: 'bot' }]);
  const [inputText, setInputText] = useState('');
  const scrollViewRef = useRef();

  const sendMessage = async () => {
    if (inputText.trim() === '') return;

    const newMessages = [...messages, { text: inputText, sender: 'user' }];
    setMessages(newMessages);
    setInputText('');

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: newMessages.map((msg) => ({
            role: msg.sender === 'user' ? 'user' : 'assistant',
            content: msg.text,
          })),
        }),
      });

      const data = await response.json();

      console.log('API Response:', data);  // Log the entire API response

      if (data && data.choices && data.choices.length > 0 && data.choices[0].message && data.choices[0].message.content) {
        const botMessage = data.choices[0].message.content;
        setMessages((prevMessages) => [...prevMessages, { text: botMessage, sender: 'bot' }]);
      } else {
        setMessages((prevMessages) => [...prevMessages, { text: 'Error: Unexpected response format', sender: 'bot' }]);
      }
    } catch (err) {
      console.error('Error communicating with ChatGPT:', err.message);
      setMessages((prevMessages) => [...prevMessages, { text: `Error: ${err.message}`, sender: 'bot' }]);
    }
  };

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ScrollView
          ref={scrollViewRef}
          style={styles.messagesContainer}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          {messages.map((message, index) => (
            <View
              key={index}
              style={[
                styles.messageBubble,
                message.sender === 'user' ? styles.userMessage : styles.botMessage,
              ]}
            >
              <Text style={[styles.messageText, message.sender === 'user' ? styles.userText : styles.botText]}>
                {message.text}
              </Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Type your message..."
            value={inputText}
            onChangeText={setInputText}
          />
          <Button title="Send" onPress={sendMessage} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
  messageBubble: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#007AFF',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#e5e5ea',
  },
  messageText: {
    fontSize: 16,
  },
  userText: {
    color: '#fff',
  },
  botText: {
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 10,
  },
});

export default ReactChatgpt;
