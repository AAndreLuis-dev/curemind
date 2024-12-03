import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {RootStackParamList} from "../routes/stack.routes";

const CadastroScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const register = () => {
        if (name && email && password) {
            Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
        } else {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
        }
    };

    const next = (() => navigation.navigate('Index'));

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../../assets/logoIcon.png')} style={styles.logo} />
            </View>
            <View style={styles.formContainer}>
                <Image source={require('../../assets/formIcon.png')} style={styles.formIcon} />
                <Text style={styles.title}>Cadastrar</Text>
                <TextInput
                    placeholder="Nome"
                    style={styles.input}
                    placeholderTextColor="#6E6E6E"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    placeholder="E-mail"
                    style={styles.input}
                    placeholderTextColor="#6E6E6E"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    placeholder="Senha"
                    style={styles.input}
                    placeholderTextColor="#6E6E6E"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity style={styles.button} onPress={register}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginText} onPress={next}>
                    <Text style={styles.loginText}>
                        Já tem uma conta? <Text style={styles.loginLink}>Faça login</Text>
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={styles.socialMediaContainer}>
                <Text style={styles.socialMediaText}>Ou cadastre-se usando:</Text>
                <View style={styles.socialIcons}>
                    <Image source={require('../../assets/facebookIcon.png')} style={styles.socialIcon} />
                    <Image source={require('../../assets/googleIcon.png')} style={styles.socialIcon} />
                </View>
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
        marginBottom: 20,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    formContainer: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        alignItems: 'center',
    },
    formIcon: {
        width: 60,
        height: 60,
        marginBottom: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0047AB',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#E6F0FA',
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
    loginText: {
        fontSize: 14,
        color: '#333333',
        marginTop: 10,
    },
    loginLink: {
        color: '#0047AB',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    socialMediaContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    socialMediaText: {
        fontSize: 14,
        color: '#fff',
        marginBottom: 10,
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '50%',
        color: '#fff',
    },
    socialIcon: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        color: '#fff',
    },
});

export default CadastroScreen;
