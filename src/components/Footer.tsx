import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, SafeAreaView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {RootStackParamList} from "../routes/stack.routes";


const Footer = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <SafeAreaView style={styles.footer}>
            <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
                <Ionicons name="home-outline" size={24} color="#3A3A3A" />
                <Text style={styles.navText}>Início</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Content')}>
                <Ionicons name="book-outline" size={24} color="#3A3A3A" />
                <Text style={styles.navText}>Conteúdo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('AnxietyChat')}>
                <Ionicons name="chatbubbles-outline" size={24} color="#3A3A3A" />
                <Text style={styles.navText}>Bate Papo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('AdminList')}>
                <Ionicons name="chatbubble-ellipses-outline" size={24} color="#3A3A3A" />
                <Text style={styles.navText}>Mensagens</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('About')}>
                <Ionicons name="people-outline" size={24} color="#3A3A3A" />
                <Text style={styles.navText}>Comunidade</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 12,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderColor: '#E0E0E0',
    },
    navItem: {
        alignItems: 'center',
    },
    navText: {
        marginTop: 4,
        fontSize: 12,
        color: '#3A3A3A',
    },
});

export default Footer;
