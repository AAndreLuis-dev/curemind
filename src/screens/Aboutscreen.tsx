import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Footer from "../components/Footer";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export default function AboutScreen() {
    const content = (() => window.location.href = '../home/AdmListScreen');
    const about = (() => window.location.href = '../home/AboutScreen');
    const insets = useSafeAreaInsets();
    return (
        <SafeAreaView style={{
            flex: 1,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }}>
            {/* Cabeçalho */}
            <View style={styles.header}>
                <Image source={require('../../assets/logoIcon.png')} style={styles.logo} />
                <Text style={styles.headerTitle}>Quem Somos?</Text>
                <Ionicons name="menu-outline" size={28} color="#3A3A3A" />
            </View>

            {/* Conteúdo principal */}
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.bubbleContainer}>
                    <View style={styles.bubble}>
                        <Text style={styles.text}>
                            Somos graduandas de Biomedicina, baianas, alunas da instituição acadêmica UNIFACS.
                            Criadoras inicialmente do Projeto Doenças Silenciosas na Infância, onde desenvolvemos pesquisas e ações para o nosso público, conscientizando a população de cuidados e atenções para com as doenças abordadas.
                        </Text>
                    </View>
                    <Image source={require('../../assets/admscomunidade.png')} style={styles.image} />
                </View>

                <View style={styles.bubbleContainer}>
                    <Image source={require('../../assets/dsiComunidade.png')} style={styles.image} />
                    <View style={styles.bubble}>
                        <Text style={styles.text}>
                            Durante o desenvolvimento do dsi.unifacs, percebemos a falta de suporte para saúde mental e bem-estar em nosso público, o que nos levou a incluir esse tema no projeto.
                            Decidimos criar um aplicativo para apoiar quem enfrenta doenças silenciosas e, ao longo do processo, vimos que ele também pode beneficiar o público em geral.
                        </Text>
                    </View>
                </View>

                {/* Área de Créditos */}
                <View style={styles.creditsSection}>
                    <Text style={styles.creditsTitle}>Créditos</Text>

                    {/* Programador */}
                    <View style={styles.creditCard}>
                        <Image source={require('../../assets/andreluis.jpeg')} style={styles.profilePic} />
                        <View style={styles.creditContent}>
                            <Text style={styles.creditName}>André Luís</Text>
                            <Text style={styles.creditRole}>Programador e Desenvolvedor</Text>
                            <View style={styles.links}>
                                <TouchableOpacity onPress={() => Linking.openURL('https://github.com/andreluis')}>
                                    <Ionicons name="logo-github" size={24} color="#3A3A3A" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => Linking.openURL('https://linkedin.com/in/andreluis')}>
                                    <Ionicons name="logo-linkedin" size={24} color="#3A3A3A" style={styles.linkIcon} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => Linking.openURL('https://instagram.com/andreluis')}>
                                    <Ionicons name="logo-instagram" size={24} color="#3A3A3A" style={styles.linkIcon} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* Designer */}
                    <View style={styles.creditCard}>
                        <Image source={require('../../assets/gagaupfpic.png')} style={styles.profilePic} />
                        <View style={styles.creditContent}>
                            <Text style={styles.creditName}>Gláucia</Text>
                            <Text style={styles.creditRole}>Designer Responsável</Text>
                            <View style={styles.links}>
                                <TouchableOpacity onPress={() => Linking.openURL('https://github.com/glauciabs')}>
                                    <Ionicons name="logo-github" size={24} color="#3A3A3A" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => Linking.openURL('https://linkedin.com/in/glauciabs')}>
                                    <Ionicons name="logo-linkedin" size={24} color="#3A3A3A" style={styles.linkIcon} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => Linking.openURL('https://instagram.com/glauciabs')}>
                                    <Ionicons name="logo-instagram" size={24} color="#3A3A3A" style={styles.linkIcon} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

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
    scrollContainer: { flex: 1, paddingHorizontal: 16 },
    bubbleContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
    bubble: { flex: 1, backgroundColor: '#FFFFFF', padding: 16, borderRadius: 12, elevation: 4 },
    text: { fontSize: 14, color: '#3A3A3A', lineHeight: 20 },
    image: { width: 80, height: 80, borderRadius: 40, marginHorizontal: 16 },
    creditsSection: { marginTop: 16 },
    creditsTitle: { fontSize: 18, fontWeight: 'bold', color: '#3A3A3A', marginBottom: 8 },
    creditCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', padding: 16, borderRadius: 12, marginBottom: 12, elevation: 4 },
    profilePic: { width: 50, height: 50, borderRadius: 25, marginRight: 12 },
    creditContent: { flex: 1 },
    creditName: { fontSize: 16, fontWeight: 'bold', color: '#3A3A3A' },
    creditRole: { fontSize: 14, color: '#3A3A3A', marginTop: 4 },
    links: { flexDirection: 'row', marginTop: 8 },
    linkIcon: { marginLeft: 16 },
    bottomNav: { flexDirection: 'row', justifyContent: 'space-around', padding: 16, borderTopWidth: 1, borderColor: '#E0E0E0' },
    navItem: { alignItems: 'center' },
});
