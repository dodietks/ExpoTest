import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';

import bgImage from '../../assets/1.png';
import bgImage2 from '../../assets/2.jpg';
import bgImage3 from '../../assets/3.jpg';
import bgImage4 from '../../assets/4.jpg';
import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Cardapio() {
  const navigation = useNavigation();

  function irParaDetalhe() {
    navigation.navigate('Detalhes');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0 produtos</Text>.
        </Text>
      </View>

      <Text style={styles.title}> Nome da loja.</Text>
      <Text style={styles.description}>Descrição do estabelecimento.</Text>

    <FlatList 
      data={[1,2,3,4,5,6]}
      style={styles.itemList}
      keyExtractor={item => String(item)} 
      showsVerticalScrollIndicator={false}
      renderItem={() => (
        <View style={styles.item}>
          <ImageBackground source={bgImage} style={styles.bgImage}>
            <View style={styles.itemAlign}>
              <Text style={styles.itemProperty}> Nome do produto</Text>
              <Text style={styles.itemValue}> R$ 999,88. </Text>
            </View>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={irParaDetalhe}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#888888" />
            </TouchableOpacity>
          </ImageBackground>
        </View>
      )}
    />        
    </View>
  );
}