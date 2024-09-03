import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>LockIn</Text>
            <View style={styles.buttonContainer}>
                <Button title="Log In" onPress={() => {}} />
                <Button title="Sign Up" onPress={() => {}} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    buttonContainer: {
        width: '80%',
    }
});

export default Home;