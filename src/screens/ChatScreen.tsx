import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Footer from "../components/Footer";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image, ImageSourcePropType } from 'react-native';

type RootStackParamList = {
    ChatScreen: { adminName: string; adminImage: ImageSourcePropType };
};

type Props = NativeStackScreenProps<RootStackParamList, 'ChatScreen'>;

type Message = {
    text: string;
    sender: 'user' | 'admin';
};

export default function ChatScreen({ route, navigation }: Props) {
    const { adminName, adminImage } = route.params;

    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState<string>("");

    const insets = useSafeAreaInsets();

    useEffect(() => {
        setMessages([
            {
                text: "Oii, como está? Então, o que gostaria de conversar? Chega mais, me conte!",
                sender: 'admin',
            },
        ]);
    }, []);

    const sendMessage = () => {
        if (newMessage.trim()) {
            setMessages([...messages, { text: newMessage, sender: 'user' }]);
            setNewMessage("");
        }
    };

    return (
        <SafeAreaView style={{
            flex: 1,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
            backgroundColor: '#E8F0FF',
        }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-outline" size={24} color="#FFF" />
                </TouchableOpacity>
                <View style={styles.adminImageContainer}>
                    <Image source={adminImage} style={styles.adminImage} />
                </View>
                <Text style={styles.headerTitle}>
                    {typeof adminName === 'string' ? adminName : 'ADM'}
                </Text>
            </View>

            <FlatList
                data={messages}
                keyExtractor={(item, index) => index.toString()}
                style={styles.chatArea}
                renderItem={({ item }) => (
                    <View
                        style={[
                            styles.message,
                            item.sender === 'user'
                                ? styles.userMessage
                                : styles.adminMessage,
                        ]}
                    >
                        <Text style={styles.messageText}>
                            {typeof item.text === 'string' ? item.text : ''}
                        </Text>
                    </View>
                )}
            />

            <View style={styles.inputArea}>
                <TextInput
                    style={styles.input}
                    placeholder="Escreva aqui..."
                    placeholderTextColor="#999"
                    value={newMessage}
                    onChangeText={setNewMessage}
                />
                <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
                    <Ionicons name="send-outline" size={20} color="#FFF" />
                </TouchableOpacity>
            </View>

            <Footer />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8F0FF',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0047AB',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    headerTitle: {
        flex: 1,
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    chatArea: {
        flex: 1,
        padding: 10,
    },
    message: {
        maxWidth: '80%',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#0047AB',
    },
    adminMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#CCC',
    },
    messageText: {
        color: '#333',
        fontSize: 16,
    },
    inputArea: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderColor: '#CCC',
    },
    input: {
        flex: 1,
        backgroundColor: '#FFF',
        borderRadius: 20,
        paddingHorizontal: 15,
        height: 40,
        borderWidth: 1,
        borderColor: '#CCC',
    },
    sendButton: {
        marginLeft: 10,
        backgroundColor: '#0047AB',
        borderRadius: 20,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    adminImageContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    adminImage: {
        width: 80,
        height: 80,
        borderRadius: 20,
    },
});
