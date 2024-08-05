import React, { useState } from 'react';
import { ActivityIndicator, View, StyleSheet, Alert, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { CardField, useStripe } from '@stripe/stripe-react-native';

const PaymentScreen = () => {
    const { confirmPayment } = useStripe();
    const [cardDetails, setCardDetails] = useState(null);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(false);

    const handlePayment = async () => {
        if (!cardDetails || !cardDetails.complete) {
            Alert.alert('Error', 'Please enter complete card details.');
            return;
        }26

        if (!email || !name || !amount) {
            Alert.alert('Error', 'Please fill in all the fields.');
            return;
        }

        setLoading(true);

        try {
            const billingDetails = {
                email,
                name,
            };

            const response = await fetch('http://192.168.41.83:3000/create-payment-intent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount: parseInt(amount, 10) * 100 }), // Convert to cents
            });

            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            const { clientSecret } = await response.json();

            const { error, paymentIntent } = await confirmPayment(clientSecret, {
                paymentMethodType: 'Card',
                paymentMethod: {
                    card: cardDetails,
                    billingDetails,
                },
            });

            if (error) {
                console.error('Payment failed:', error.message);
                Alert.alert('Payment Error', error.message);
            } else {
                console.log('Payment Successful', paymentIntent);
                Alert.alert('Success', 'Payment Successful');
            }
        } catch (error) {
            console.error('Payment Error', error);
            Alert.alert('Payment Error', 'An unexpected error occurred.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Payment Details</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                />
                {!name && <Text style={styles.errorText}>Name is required</Text>}
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                {!email && <Text style={styles.errorText}>Email is required</Text>}
                <TextInput
                    style={styles.input}
                    placeholder="Amount"
                    value={amount}
                    onChangeText={setAmount}
                    keyboardType="numeric"
                />
                {!amount && <Text style={styles.errorText}>Amount is required</Text>}
                <CardField
                    postalCodeEnabled={false}
                    placeholder={{ number: '4242 4242 4242 4242' }}
                    cardStyle={styles.card}
                    style={styles.cardField}
                    onCardChange={(cardDetails) => setCardDetails(cardDetails)}
                />
                {!cardDetails?.complete && <Text style={styles.errorText}>Complete card details are required</Text>}
                <TouchableOpacity style={styles.payButton} onPress={handlePayment} disabled={loading}>
                    {loading ? (
                        <ActivityIndicator size="small" color="#fff" />
                    ) : (
                        <Text style={styles.payButtonText}>Pay</Text>
                    )}
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f2f2f2',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#2575fc',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        fontSize: 16,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginBottom: 10,
    },
    cardField: {
        height: 50,
        marginVertical: 30,
    },
    card: {
        backgroundColor: '#FFFFFF',
    },
    payButton: {
        backgroundColor: '#2575fc',
        borderRadius: 5,
        paddingVertical: 15,
        alignItems: 'center',
    },
    payButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default PaymentScreen;
