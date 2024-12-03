import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    Alert,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../routes/stack.routes';

const IndexScreen: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Tipagem correta do useNavigation
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleLogin = () => {
        if (username.trim() && password.trim()) {
            navigation.navigate('Sleep'); // Nome da rota agora é reconhecido
        } else {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
        }
    };

    const handleRegister = () => {
        navigation.navigate('Register'); // Altere para o nome da sua rota de cadastro
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/logoIcon.png')}
                    style={styles.logo}
                />
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    placeholder="Usuário"
                    style={styles.input}
                    placeholderTextColor="#6E6E6E"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    placeholder="Senha"
                    style={styles.input}
                    placeholderTextColor="#6E6E6E"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleRegister}>
                    <Text style={styles.createAccount}>Criar uma conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0047AB',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    formContainer: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#0047AB',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#EDEDED',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        color: '#333333',
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#FF6B6B',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    createAccount: {
        fontSize: 14,
        color: '#0047AB',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
});

export default IndexScreen;
