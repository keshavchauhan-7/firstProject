import React from 'react';
import { SafeAreaView } from 'react-native';
import Map from './Map';
const Home = () => {
    const initialRegion = {
        latitude: 30.741482,
        longitude: 76.768066,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Map initialRegion={initialRegion} />
        </SafeAreaView>
    );
};
export default Home;