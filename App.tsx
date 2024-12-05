import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/routes/stack.routes';
import { StatusBar, SafeAreaView, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar hidden={true} />
            <SafeAreaView style={styles.safeArea}>
                <KeyboardAvoidingView
                    style={styles.keyboardAvoidingView}
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                >
                    <AppStack />
                </KeyboardAvoidingView>
            </SafeAreaView>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#0047AB', // Cor de fundo padrão
    },
    keyboardAvoidingView: {
        flex: 1,
    },
});
