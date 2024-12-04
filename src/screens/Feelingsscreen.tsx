import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../routes/stack.routes';

const FeelingsScreen: React.FC = () => {
    const [selectedFeeling, setSelectedFeeling] = useState<string | null>(null);

    // Tipando o hook de navegação
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const feelings = [
        { id: 'happy', image: require('../../assets/feliz.png'), label: 'Feliz' },
        { id: 'sad', image: require('../../assets/triste.png'), label: 'Triste' },
        { id: 'confused', image: require('../../assets/duvvvida.png'), label: 'Dúvida' },
        { id: 'angry', image: require('../../assets/raiva.png'), label: 'Raiva' },
    ];

    const handleSelection = (id: string) => {
        setSelectedFeeling(id);
    };

    const handleNext = () => {
        if (selectedFeeling) {
            // Você pode adicionar lógica para salvar o estado aqui antes de navegar
            navigation.navigate('LifeStyle'); // Altere para a próxima tela se necessário
        } else {
            alert('Por favor, selecione um sentimento antes de avançar.');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/logoIcon.png')} style={styles.logo} />
                <TouchableOpacity style={styles.profileButton}>
                    <Text style={styles.profileIcon}>👤</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>Como você se sente ao acordar?</Text>
            <Text style={styles.subtitle}>(Selecione a imagem que melhor representa)</Text>
            <View style={styles.feelingsContainer}>
                {feelings.map((feeling) => (
                    <TouchableOpacity
                        key={feeling.id}
                        style={[
                            styles.feelingCard,
                            selectedFeeling === feeling.id && styles.selectedFeelingCard,
                        ]}
                        onPress={() => handleSelection(feeling.id)}
                    >
                        <Image source={feeling.image} style={styles.feelingImage} />
                        <Text style={styles.feelingLabel}>{feeling.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.footerButtonText}>Pular</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNext} style={styles.footerButton}>
                    <Text style={styles.footerButtonText}>Avançar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#0047AB' // Exemplo de gradiente
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
        backgroundColor: '#0047AB',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileIcon: {
        fontSize: 18,
        color: '#000',
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
        marginTop: 80,
        marginBottom: 20,
        elevation: 5,
    },
    selectedFeelingCard: {
        borderWidth: 2,
        borderColor: '#0047AB',
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
    },
    footerButton: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        elevation: 2,
    },
    footerButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0047AB',
    },
});

export default FeelingsScreen;
