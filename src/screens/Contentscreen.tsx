import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, Image, ScrollView, Alert} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Footer from "../components/Footer";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {RootStackParamList} from "../routes/stack.routes";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export default function ContentScreen() {
    const contentItems = [
        { id: '1', title: 'Como melhorar a minha autoestima?', image: require('../../assets/autoestimaConteudo.png'), link: '' },
        { id: '2', title: 'Autocuidado', image: require('../../assets/autocuidadoConteudo.png') },
        { id: '3', title: 'O que fazer para melhorar o humor?', image: require('../../assets/melhorarHumorConteudo.png') },
        { id: '4', title: 'Como lidar com a ansiedade?', image: require('../../assets/ansiedadeConteudo.png'), link: '../content/anxietyBatePapo' },
        { id: '5', title: 'Como ter boas relações no trabalho ou em casa?', image: require('../../assets/boasrelacoesConteudo.png') },
        { id: '6', title: 'Quando sei que devo procurar um profissional?', image: require('../../assets/profissionalConteudo.png') },
    ];
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const reflectiveQuestions = [
        { id: '1', question: 'Existe coragem sem o medo?' },
        { id: '2', question: 'A felicidade pode existir sem a tristeza?' },
        { id: '3', question: 'Se tudo é possível, então o impossível é possível?' },
    ];

    const handleSubmit = () => {
        navigation.navigate('AnxietyChat');
    };
    const insets = useSafeAreaInsets();
    return (
        <SafeAreaView style={{
            flex: 1,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }}>
            <View style={styles.header}>
                <Image
                    source={require('../../assets/logoIcon.png')}
                    style={styles.logoIcon}
                />
                <Text style={styles.title}>Para Você · Conteúdos</Text>
                <Ionicons name="menu-outline" size={28} color="#3A3A3A" />
            </View>

            <FlatList
                ListHeaderComponent={
                    <>
                        <Text style={styles.sectionTitle}>Dicas de Conteúdo</Text>
                        <FlatList
                            data={contentItems}
                            numColumns={2}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styles.contentCard} onPress={handleSubmit}>
                                    <Image source={item.image} style={styles.contentImage} />
                                    <Text style={styles.contentTitle}>{item.title}</Text>
                                </TouchableOpacity>
                            )}
                            keyExtractor={(item) => item.id}
                            contentContainerStyle={styles.contentList}
                        />
                        <Text style={styles.sectionTitle}>Perguntas Reflexivas</Text>
                    </>
                }
                data={reflectiveQuestions}
                renderItem={({ item }) => (
                    <View style={styles.questionCard}>
                        <Text style={styles.questionText}>{item.question}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.questionList}
            />

            <Footer />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F5F5F5' },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 },
    logoIcon: { width: 40, height: 40 },
    title: { fontSize: 18, fontWeight: 'bold', color: '#3A3A3A', flex: 1, textAlign: 'center' },
    sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#3A3A3A', marginLeft: 16, marginTop: 16 , marginBottom: 16},
    contentList: { paddingHorizontal: 16 },
    contentCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        margin: 8,
        flex: 1,
        padding: 12,
        alignItems: 'center',
        elevation: 5,
    },
    contentImage: { width: 80, height: 80, marginBottom: 8, borderRadius: 8 },
    contentTitle: { fontSize: 14, fontWeight: 'bold', textAlign: 'center', color: '#3A3A3A' },
    questionList: { padding: 16 },
    questionCard: {
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderRadius: 12,
        marginBottom: 8,
        elevation: 4,
    },
    questionText: { fontSize: 16, color: '#3A3A3A', textAlign: 'center' },
});
