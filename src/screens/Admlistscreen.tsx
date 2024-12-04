import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Footer from "../components/Footer";

export default function AdmListScreen() {
    const admins = [
        {
            name: "glauciabs",
            description: "Pessoa reservada e observadora, em que foca na ideia interna e questiona o externo, além de ser perfeccionista e idealista.",
            image: require('../../assets/gagaupfpic.png'),
        },
        {
            name: "heloyseac",
            description: "Pessoa proativa, que enxerga o positivo e busca planejar o objetivo, além do perfil de liderança e colaboradora.",
            image: require('../../assets/heloysa.png'),
        },
        {
            name: "islacrns",
            description: "Pessoa que consegue se encaixar no ambiente social, com um toque artístico, além de ser reservada com o seu interior.",
            image: require('../../assets/islana.png'),
        },
        {
            name: "kerolayneas",
            description: "Uma pessoa sábia, boa ouvinte, confiável e comunicativa, que oferece bons conselhos e segurança para os outros.",
            image: require('../../assets/kerolayne.png'),
        },
        {
            name: "laizaisidoria",
            description: "Pessoa que busca a solução, procurando o equilíbrio, além de ser dramática, mas com toque de criatividade e focada no objetivo.",
            image: require('../../assets/layza.png'),
        },
        {
            name: "letsfjesus~",
            description: "Pessoa atenta aos detalhes, está sempre observando ao redor, reservada e introvertida, é focada e criativa.",
            image: require('../../assets/lets.png'),
        },
    ];

    const about = (() => window.location.href = '../home/AboutScreen');

    return (
        <SafeAreaView style={styles.container}>
            {/* Cabeçalho */}
            <View style={styles.header}>
                <Image source={require('../../assets/logoIcon.png')} style={styles.logo} />
                <Text style={styles.headerTitle}>Quer conversar com alguma ADM?</Text>
                <Ionicons name="menu-outline" size={28} color="#3A3A3A" />
            </View>

            {/* Subtítulo */}
            <Text style={styles.subtitle}>(Selecione a ADM)</Text>

            {/* Lista de ADMs */}
            <ScrollView style={styles.scrollContainer}>
                {admins.map((admin, index) => (
                    <View key={index} style={styles.card}>
                        <Image source={admin.image} style={styles.profilePic} />
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>{admin.name}</Text>
                            <Text style={styles.cardDescription}>{admin.description}</Text>
                        </View>
                        <Ionicons name="search-outline" size={20} color="#3A3A3A" />
                    </View>
                ))}
            </ScrollView>

            {/* Navegação Inferior */}
            {/* Navegação Inferior */}
            <Footer/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F5F5F5' },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 },
    logo: { width: 40, height: 40 },
    headerTitle: { flex: 1, fontSize: 18, fontWeight: 'bold', color: '#3A3A3A', textAlign: 'center' },
    subtitle: { fontSize: 14, color: '#3A3A3A', textAlign: 'center', marginBottom: 8 },
    scrollContainer: { flex: 1, paddingHorizontal: 16 },
    card: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', padding: 16, marginBottom: 12, borderRadius: 12, elevation: 4 },
    profilePic: { width: 50, height: 50, borderRadius: 25, marginRight: 12 },
    cardContent: { flex: 1 },
    cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#3A3A3A' },
    cardDescription: { fontSize: 14, color: '#3A3A3A', marginTop: 4, lineHeight: 20 },
    bottomNav: { flexDirection: 'row', justifyContent: 'space-around', padding: 16, borderTopWidth: 1, borderColor: '#E0E0E0' },
    navItem: { alignItems: 'center' },
});
