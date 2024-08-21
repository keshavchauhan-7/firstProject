import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
    webClientId: '938006152827-46rgh2c6qcucb495iglkaq1n4kfbj0p2.apps.googleusercontent.com',
});

const SocialAuth = () => {

    async function onGoogleButtonPress() {
        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            const { idToken } = await GoogleSignin.signIn();
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            await auth().signInWithCredential(googleCredential);

            console.log('User signed in');
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.googleButton} onPress={onGoogleButtonPress}>
                <Text style={styles.buttonText}>Sign in With Google</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    googleButton: {
        backgroundColor: '#4285F4',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default SocialAuth;
