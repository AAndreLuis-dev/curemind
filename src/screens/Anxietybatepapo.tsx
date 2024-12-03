import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Footer from "../components/Footer";

export default function AnxietyBatePapo() {
    const content = (() => window.location.href = '../home/AdmListScreen');
    const about = (() => window.location.href = '../home/AboutScreen.tsx');
    return (
        <SafeAreaView style={styles.container}>
            {/* Cabeçalho */}
            <View style={styles.header}>
                <Image source={require('../../assets/logoIcon.png')} style={styles.logo} />
                <View style={styles.searchContainer}>
                    <Ionicons name="search-outline" size={20} color="#3A3A3A" style={styles.searchIcon} />
                    <Text style={styles.searchPlaceholder}>Buscar</Text>
                </View>
                <Ionicons name="menu-outline" size={28} color="#3A3A3A" />
            </View>

            {/* Filtros */}
            <View style={styles.filterContainer}>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={styles.filterText}>Popular</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={styles.filterText}>Seguindo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={styles.filterText}>Salvos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={styles.filterText}>Meus Comentários</Text>
                </TouchableOpacity>
            </View>

            {/* Post */}
            <ScrollView>
                <View style={styles.postContainer}>
                    {/* Informações do usuário */}
                    <View style={styles.userInfo}>
                        <Image source={require('../../assets/gagaupfpic.png')} style={styles.userPic} />
                        <Text style={styles.username}>
                            Glauciabs <Text style={styles.followText}>· Seguir</Text>
                        </Text>
                        <Ionicons name="ellipsis-horizontal" size={20} color="#3A3A3A" style={styles.moreIcon} />
                    </View>

                    {/* Conteúdo do post */}
                    <Image source={require('../../assets/ansiedadeBatePapo.png')} style={styles.postImage} />
                    <Text style={styles.postTitle}>
                        A ansiedade juntamente com o estresse pode afetar nossa saúde mental, mas como?
                    </Text>
                    <Text style={styles.postDescription}>
                        Ansiedade + estresse e como se relacionam{'\n'}
                        A ansiedade é um estado emocional caracterizado por preocupação excessiva, apreensão ou medo em relação ao futuro. Uma resposta interna.{'\n\n'}
                        O estresse é uma reação física, emocional e psicológica a pressões externas que exigem adaptação ou resposta.{'\n\n'}
                        O estresse pode desencadear ou agravar a ansiedade, e a ansiedade pode aumentar a percepção do estresse, como um ciclo, mas como?{' '}
                        <Text style={styles.readMore}>Continuar lendo...</Text>
                    </Text>

                    {/* Ações */}
                    <View style={styles.actionsContainer}>
                        <View style={styles.action}>
                            <Ionicons name="heart-outline" size={20} color="#3A3A3A" />
                            <Text style={styles.actionText}>75</Text>
                        </View>
                        <View style={styles.action}>
                            <Ionicons name="chatbubble-outline" size={20} color="#3A3A3A" />
                            <Text style={styles.actionText}>30</Text>
                        </View>
                        <View style={styles.action}>
                            <Ionicons name="share-social-outline" size={20} color="#3A3A3A" />
                            <Text style={styles.actionText}>20</Text>
                        </View>
                    </View>

                    <Text style={styles.commentsLink}>Ver todos os 30 comentários</Text>
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
    searchContainer: { flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#E0E0E0', borderRadius: 20, marginHorizontal: 16, paddingHorizontal: 12 },
    searchIcon: { marginRight: 8 },
    searchPlaceholder: { fontSize: 14, color: '#9E9E9E' },
    filterContainer: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 8, backgroundColor: '#FFFFFF', borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#E0E0E0' },
    filterButton: { padding: 8 },
    filterText: { fontSize: 14, color: '#3A3A3A' },
    postContainer: { backgroundColor: '#FFFFFF', margin: 16, borderRadius: 12, padding: 16, elevation: 4 },
    userInfo: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
    userPic: { width: 40, height: 40, borderRadius: 20, marginRight: 8 },
    username: { fontSize: 16, fontWeight: 'bold', color: '#3A3A3A' },
    followText: { fontSize: 14, fontWeight: 'normal', color: '#FF5A5F' },
    moreIcon: { marginLeft: 'auto' },
    postImage: { width: '100%', height: 180, borderRadius: 12, marginBottom: 12 },
    postTitle: { fontSize: 16, fontWeight: 'bold', color: '#3A3A3A', marginBottom: 8 },
    postDescription: { fontSize: 14, color: '#3A3A3A', marginBottom: 12, lineHeight: 20 },
    readMore: { color: '#FF5A5F', fontWeight: 'bold' },
    actionsContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 8 },
    action: { flexDirection: 'row', alignItems: 'center' },
    actionText: { fontSize: 14, color: '#3A3A3A', marginLeft: 4 },
    commentsLink: { fontSize: 14, color: '#FF5A5F', fontWeight: 'bold', textAlign: 'center' },
    bottomNav: { flexDirection: 'row', justifyContent: 'space-around', padding: 16, borderTopWidth: 1, borderColor: '#E0E0E0' },
    navItem: { alignItems: 'center' },
});
