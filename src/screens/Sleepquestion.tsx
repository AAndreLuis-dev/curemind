import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../routes/stack.routes';

const SleepQuestionScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const next = () => {
    navigation.navigate('Feelings'); // Altere para a rota correta
  };

  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../../assets/logoIcon.png')} style={styles.logo} />
          <TouchableOpacity style={styles.profileButton}>
            <Text style={styles.profileIcon}>👤</Text>
          </TouchableOpacity>
        </View>
        <Image source={require('../../assets/dormir.png')} style={styles.image} />
        <Text style={styles.questionText}>Você dorme bem?</Text>
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionButton} onPress={next}>
            <Text style={styles.optionText}>Não, não consigo dormir!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={next}>
            <Text style={styles.optionText}>Sim, durmo bem!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={next}>
            <Text style={styles.optionText}>Às vezes tenho dificuldade.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={next}>
            <Text style={styles.optionText}>Não sei explicar...</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.navigationContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Feelings')}>
            <Text style={styles.navigationText}>Pular</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.navigationText}>Voltar</Text>
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
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  questionText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  optionsContainer: {
    marginBottom: 20,
    height: 200,
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
    marginBottom: 40,
    elevation: 5,
  },
  optionText: {
    fontSize: 22,
    color: '#0047AB',
    textAlign: 'center',
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
    textAlign: 'center',
    marginTop: 50,
  },
});


export default SleepQuestionScreen;