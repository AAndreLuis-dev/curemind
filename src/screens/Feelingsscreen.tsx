import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../routes/stack.routes';

const FeelingsScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const feelings = [
        { id: 'happy', image: require('../../assets/feliz.png'), label: 'Feliz' },
        { id: 'sad', image: require('../../assets/triste.png'), label: 'Triste' },
        { id: 'confused', image: require('../../assets/duvvvida.png'), label: 'Dúvida' },
        { id: 'angry', image: require('../../assets/raiva.png'), label: 'Raiva' },
    ];

    const handleSelection = (id: string) => {
        // Realize aqui qualquer ação necessária, como salvar o estado selecionado
        navigation.navigate('LifeStyle'); // Altere para a próxima tela desejada
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Image source={require('../../assets/logoIcon.png')} style={styles.logo} />
                <TouchableOpacity style={styles.profileButton}>
                    <Text style={styles.profileIcon}>👤</Text>
                </TouchableOpacity>
            </View>

            {/* Pergunta */}
            <Text style={styles.title}>Como você se sente ao acordar?</Text>
            <Text style={styles.subtitle}>(Selecione a imagem que melhor representa)</Text>

            {/* Cartões de Sentimentos */}
            <View style={styles.feelingsContainer}>
                {feelings.map((feeling) => (
                    <TouchableOpacity
                        key={feeling.id}
                        style={styles.feelingCard}
                        onPress={() => handleSelection(feeling.id)}
                    >
                        <Image source={feeling.image} style={styles.feelingImage} />
                        <Text style={styles.feelingLabel}>{feeling.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Barra de Navegação Inferior */}
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.footerButtonText}>Pular</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.footerButtonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#0047AB',
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
        fontSize: 18,
        color: '#0047AB',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#E3E3E3',
        textAlign: 'center',
        marginBottom: 20,
    },
    feelingsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 50,
    },
    feelingCard: {
        width: '45%',
        backgroundColor: '#FFFFFF',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
        elevation: 5,
    },
    feelingImage: {
        width: 100,
        height: 120,
        marginBottom: 10,
    },
    feelingLabel: {
        fontSize: 14,
        color: '#0047AB',
        fontWeight: 'bold',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    footerButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
});

export default FeelingsScreen;
