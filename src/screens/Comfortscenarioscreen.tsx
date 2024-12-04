import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ComfortScenarioScreen = () => {
    const next = (() => window.location.href = 'ImprovementQuestionScreen');
    return (
        <View style={styles.container}>
            {/* Cabeçalho */}
            <View style={styles.header}>
                <Image source={require('../../assets/logoIcon.png')} style={styles.logo} />
                <TouchableOpacity style={styles.profileButton}>
                    <Text style={styles.profileIcon}>👤</Text>
                </TouchableOpacity>
            </View>

            {/* Pergunta */}
            <Text style={styles.questionText}>Qual cenário te traria conforto?</Text>
            <Text style={styles.subtitle}>(Selecione a imagem)</Text>

            {/* Opções de Cenário */}
            <View style={styles.optionsContainer}>
                {[
                    { image: require('../../assets/casa.png'), label: 'Casa' },
                    { image: require('../../assets/praia.png'), label: 'Praia' },
                    { image: require('../../assets/caminhada.png'), label: 'Caminhada' },
                    { image: require('../../assets/floresta.png'), label: 'Floresta' },
                    { image: require('../../assets/esporte.png'), label: 'Esportes' },
                    { image: require('../../assets/balanco.png'), label: 'Parque' },
                ].map((item, index) => (
                    <TouchableOpacity key={index} style={styles.optionButton}>
                        <Image source={item.image} style={styles.optionImage} />
                        <Text style={styles.optionLabel}>{item.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Navegação */}
            <View style={styles.navigationContainer}>
                <TouchableOpacity onPress={next}>
                    <Text style={styles.navigationText}>Pular</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={next}>
                    <Text style={styles.navigationText}>Avançar</Text>
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
    questionText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#E3E3E3',
        textAlign: 'center',
        marginBottom: 20,
    },
    optionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    optionButton: {
        width: '45%',
        backgroundColor: '#FFFFFF',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
        elevation: 5,
    },
    optionImage: {
        width: 80,
        height: 80,
        marginBottom: 10,
    },
    optionLabel: {
        fontSize: 14,
        color: '#0047AB',
        fontWeight: 'bold',
    },
    navigationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    navigationText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
});

export default ComfortScenarioScreen;
