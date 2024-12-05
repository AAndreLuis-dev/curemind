import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, Image, ImageBackground } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../routes/stack.routes';
import Footer from "../components/Footer";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [backgroundColor, setBackgroundColor] = useState('#f5f5f5');
    const insets = useSafeAreaInsets();
    const handleEmotionPress = (emotion: string) => {
        switch (emotion) {
            case 'Feliz':
                setBackgroundColor('#e8f5e9');
                break;
            case 'Triste':
                setBackgroundColor('#ffebee');
                break;
            case 'Ansioso':
                setBackgroundColor('#fffde7');
                break;
            case 'Calmo':
                setBackgroundColor('#f5f5f5');
                break;
            default:
                setBackgroundColor('#f5f5f5');
        }
    };

    const days = ["D", "T", "Q", "Q", "S", "S"];
    const dates = [3, 4, 5, 6, 7, 8];
    const dailyContent = [
        { id: '1', title: 'Importância do profissional', image: require('../../assets/profissionalSaude.png') },
        { id: '2', title: 'Como lidar com o estresse', image: require('../../assets/estresse.png') },
        { id: '3', title: 'Como lidar com emoções', image: require('../../assets/emocoes.png') },
    ];

    return (
        <SafeAreaView style={{
            flex: 1,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }}>
            <View style={styles.header}>
                <ImageBackground source={require('../../assets/logoIcon.png')} style={styles.logoIcon} />
                <FontAwesome name="user-circle" size={24} color="#3A3A3A" />
                <Ionicons name="notifications-outline" size={24} style={styles.notIcon} color="#3A3A3A" />
            </View>

            <View style={styles.dateSection}>
                <Text style={styles.dateText}>4 de novembro</Text>
                <FlatList
                    horizontal
                    data={dates}
                    renderItem={({ item, index }) => (
                        <View style={styles.dateItem}>
                            <Text style={[styles.dayText, index === 1 && styles.highlightedDay]}>{days[index]}</Text>
                            <Text style={[styles.dateNumber, index === 1 && styles.highlightedDate]}>{item}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.toString()}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.dateList}
                />
                <View style={styles.iconSection}>
                    <Ionicons name="calendar" size={24} color="#3A3A3A" style={styles.calendarIcon} />
                    <ImageBackground source={require('../../assets/Group1.png')} style={styles.calendarImage} />
                </View>
            </View>

            <View style={styles.emotionSection}>
                <Text style={styles.emotionTitle}>Como está se sentindo hoje?</Text>
                <FlatList
                    horizontal
                    data={[
                        { id: '1', emotion: 'Feliz', icon: 'happy-outline' },
                        { id: '2', emotion: 'Triste', icon: 'sad-outline' },
                        { id: '3', emotion: 'Ansioso', icon: 'alert-outline' },
                        { id: '4', emotion: 'Calmo', icon: 'leaf-outline' },
                    ]}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.emotionItem}
                            onPress={() => handleEmotionPress(item.emotion)}
                        >
                            <Ionicons name={item.icon} size={32} color="#FF6B6B" />
                            <Text style={styles.emotionText}>{item.emotion}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.emotionListContainer}
                />
            </View>

            <ImageBackground
                source={require('../../assets/aurea.jpeg')}
                style={styles.aureaSection}
                imageStyle={styles.aureaBackground}
            >
                <View style={styles.aureaOverlay}>
                    <View style={styles.aureaContent}>
                        <View style={styles.aureaTextContainer}>
                            <Text style={styles.aureaTitle}>Tire suas dúvidas com nossa assistente virtual</Text>
                            <Text style={styles.aureaSubtitle}>Áurea</Text>
                        </View>
                        <Image source={require('../../assets/auraCircle.png')} style={styles.aureaImage} />
                    </View>
                </View>
            </ImageBackground>

            <Text style={styles.dailyContentTitle}>Dicas do dia · Para você</Text>
            <FlatList
                horizontal
                data={dailyContent}
                renderItem={({ item }) => (
                    <View style={styles.contentCard}>
                        <Image source={item.image} style={styles.contentImage} />
                        <Text style={styles.contentTitle}>{item.title}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
            />

            <Text style={styles.cycleTitle}>Recursos de apoio emocional</Text>
            <View style={styles.cycleInfo}>
                <View style={styles.cycleItem}>
                    <Ionicons name="help-circle-outline" size={24} color="#3A3A3A" />
                    <Text style={styles.cycleText}>Psicologia Positiva</Text>
                </View>
                <View style={styles.cycleItem}>
                    <Ionicons name="heart-outline" size={24} color="#3A3A3A" />
                    <Text style={styles.cycleText}>Autoestima</Text>
                </View>
                <View style={styles.cycleItem}>
                    <MaterialIcons name="self-improvement" size={24} color="#3A3A3A" />
                    <Text style={styles.cycleText}>Mindfulness</Text>
                </View>
            </View>

            <Footer />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1 },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, marginTop: 20 },
    logoIcon: { height: 40, width: 40 },
    notIcon: { right: 13 },
    dateSection: { alignItems: 'center', paddingVertical: 16, position: 'relative' },
    iconSection: { position: 'absolute', right: 16, top: 0 },
    calendarIcon: { marginBottom: 8, marginLeft: 60 },
    calendarImage: { width: 60, height: 60, marginLeft: 30 },
    dateText: { fontSize: 20, fontWeight: '500', color: '#3A3A3A' },
    dateList: { flexDirection: 'row', justifyContent: 'space-evenly', width: '100%', marginTop: 16 },
    dateItem: { alignItems: 'center', marginHorizontal: 8 },
    dayText: { fontSize: 16, color: '#3A3A3A' },
    highlightedDay: { fontWeight: 'bold', color: '#0000FF' },
    dateNumber: { fontSize: 20, color: '#3A3A3A' },
    highlightedDate: { color: '#FF6B6B', fontWeight: 'bold' },
    emotionSection: { alignItems: 'center', paddingVertical: 16 },
    emotionTitle: { fontSize: 18, fontWeight: '500', color: '#3A3A3A', marginBottom: 16 },
    emotionListContainer: { flex: 1, justifyContent: 'space-around', alignItems: 'center', width: '100%' },
    emotionItem: { alignItems: 'center', paddingHorizontal: 16 },
    emotionText: { fontSize: 14, color: '#3A3A3A', marginTop: 8 },
    dailyContentTitle: { paddingLeft: 16, fontSize: 20, fontWeight: '700', marginTop: 16, color: '#3A3A3A' },
    contentCard: { borderRadius: 16, padding: 16, margin: 8, width: 200, alignItems: 'center', height: 220, backgroundColor: '#FFF', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 5, elevation: 5 },
    contentTitle: { fontSize: 18, fontWeight: 'bold', color: '#3A3A3A', textAlign: 'center', marginBottom: 12 },
    contentImage: { width: 100, height: 100, resizeMode: 'contain', borderRadius: 10 },
    cycleTitle: { paddingLeft: 16, fontSize: 18, fontWeight: '500', marginTop: 16, color: '#3A3A3A' },
    cycleInfo: { flexDirection: 'row', justifyContent: 'space-around', padding: 16 },
    cycleItem: { alignItems: 'center', width: 100 },
    cycleText: { color: '#3A3A3A', textAlign: 'center', fontSize: 14 },
    aureaSection: { marginHorizontal: 16, borderRadius: 16, height: 200, justifyContent: 'center', alignItems: 'center', marginTop: 20, overflow: 'hidden' },
    aureaBackground: { borderRadius: 16, opacity: 0.7 },
    aureaOverlay: { position: 'absolute', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
    aureaContent: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingHorizontal: 16 },
    aureaTextContainer: { flex: 1, alignItems: 'flex-start', justifyContent: 'center' },
    aureaTitle: { textAlign: 'left', color: '#FFFFFF', fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
    aureaSubtitle: { textAlign: 'left', color: '#FFFFFF', fontSize: 16, fontWeight: '300' },
    aureaImage: { width: 90, height: 90, marginLeft: 5 }
});
