// ReactFirebase.js
import { StyleSheet, Text, View, FlatList, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const ReactFirebase = ({ navigation }) => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        try {
            const snapShot = await firestore().collection('user').get();
            const userList = snapShot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setUsers(userList);
        } catch (error) {
            console.error("Error fetching users: ", error);
        }
    };

    const addUser = async () => {
        if (name && age && email) {
            try {
                await firestore().collection('user').add({ name, age, email });
                setName('');
                setAge('');
                setEmail('');
                getUser();
            } catch (error) {
                console.error("Error adding user: ", error);
            }
        }
    };

    const updateUser = async () => {
        if (editId && name && age && email) {
            try {
                await firestore().collection('user').doc(editId).update({ name, age, email });
                setName('');
                setAge('');
                setEmail('');
                setEditId(null);
                getUser();
            } catch (error) {
                console.error("Error updating user: ", error);
            }
        }
    };

    const deleteUser = async (id) => {
        try {
            await firestore().collection('user').doc(id).delete();
            getUser(); // Refresh the list
        } catch (error) {
            console.error("Error deleting user: ", error);
        }
    };

    const handleSignOut = async () => {
        try {
            await auth().signOut();
            Alert.alert('Sign out successfully');
            navigation.navigate('LoginScreen'); // Navigate to LoginScreen on successful sign-out
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.userCard}>
            <Text style={styles.userId}>Id: {item.id}</Text>
            <Text style={styles.userName}>Name: {item.name}</Text>
            <Text style={styles.userAge}>Age: {item.age}</Text>
            <Text style={styles.userEmail}>Email: {item.email}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => {
                    setName(item.name);
                    setAge(item.age);
                    setEmail(item.email);
                    setEditId(item.id);
                }}>
                    <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => deleteUser(item.id)}>
                    <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Age"
                value={age}
                onChangeText={setAge}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <Button
                title={editId ? "Update User" : "Add User"}
                onPress={editId ? updateUser : addUser}
            />
            <Button
                title="Sign Out"
                onPress={handleSignOut}
                color="#ff4500"
            />
            <FlatList
                data={users}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f0f8ff',
        flex: 1,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    userCard: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 15,
        marginTop: 20,
        borderWidth: 2,
        borderColor: '#87ceeb',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    },
    userId: {
        fontSize: 18,
        color: '#ff4500',
        fontWeight: 'bold',
    },
    userName: {
        fontSize: 20,
        color: '#2e8b57',
        fontWeight: 'bold',
    },
    userAge: {
        fontSize: 18,
        color: '#4169e1',
    },
    userEmail: {
        fontSize: 16,
        color: '#9932cc',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    button: {
        backgroundColor: '#4682b4',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    listContainer: {
        paddingBottom: 20,
    },
});

export default ReactFirebase;
