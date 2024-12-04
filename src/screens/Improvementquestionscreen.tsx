import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../routes/stack.routes';

const ImprovementQuestionScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleNext = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/logoIcon.png')} style={styles.logo} />
                <TouchableOpacity style={styles.profileButton}>
                    <Text style={styles.profileIcon}>👤</Text>
                </TouchableOpacity>
            </View>
            <Image source={require('../../assets/sucesso.png')} style={styles.image} />
            <Text style={styles.questionText}>No que gostaria de melhorar?</Text>
            <View style={styles.optionsContainer}>
                {[
                    'Ser mais produtivo(a).',
                    'Ser mais amável.',
                    'Aproveitar mais a vida.',
                    'Agradecer mais.',
                ].map((option, index) => (
                    <TouchableOpacity key={index} onPress={handleNext} style={styles.optionButton}>
                        <Text style={styles.optionText}>{option}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.navigationContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.navigationText}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNext}>
                    <Text style={styles.navigationText}>Pular</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0047AB',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    profileButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileIcon: {
        color: '#0047AB',
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    questionText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 20,
    },
    optionsContainer: {
        marginBottom: 20,
    },
    optionButton: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 10,
        elevation: 2,
    },
    optionText: {
        fontSize: 16,
        color: '#0047AB',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    navigationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    navigationText: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});

export default ImprovementQuestionScreen;
