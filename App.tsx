import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/routes/stack.routes';
import {StatusBar} from "react-native"; // Rotas da aplicação (pilha principal)

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar hidden={true} />
            <AppStack />
        </NavigationContainer>
    );
}
