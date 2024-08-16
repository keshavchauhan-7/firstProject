// LoginScreen.js
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert, Text } from 'react-native';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignupSuccess, setIsSignupSuccess] = useState(false);

    const handleLogin = async () => {
        try {
            await auth().signInWithEmailAndPassword(email, password);
            navigation.navigate('UserAddScreen'); // Navigate to UserAddScreen on successful login
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    const handleSignup = async () => {
        try {
            await auth().createUserWithEmailAndPassword(email, password);
            navigation.navigate('UserAddScreen'); // Navigate to UserAddScreen on successful signup
            setIsSignupSuccess(true);
            setEmail('');
            setPassword('');
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoCapitalize="none"
            />
            {isSignupSuccess && (
                <Text style={styles.successMessage}>Signup successful!</Text>
            )}
            <Button title="Login" onPress={handleLogin} color="#1E90FF" />
            <Button title="Signup" onPress={handleSignup} color="#32CD32" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#F0F8FF',
    },
    input: {
        borderWidth: 1,
        borderColor: '#B0C4DE',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        backgroundColor: '#FFFFFF',
    },
    successMessage: {
        color: '#32CD32',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
});

export default LoginScreen;





