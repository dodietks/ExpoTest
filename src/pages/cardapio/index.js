import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';

import logoImg from '../../assets/logo.png';
import MenuItem from '../../components/menuItem';
import Header from '../../components/header';

import styles from './styles';

export default function Cardapio() {
  const navigation = useNavigation();

  function irParaDetalhe() {
    navigation.navigate('Detalhes');
  }

  return (
    <View style={styles.container}>
      <Header>
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0 produtos</Text>.
        </Text>
      </Header>

    <Text style={styles.title}> Nome da loja.</Text>
    <Text style={styles.description}>Descrição do estabelecimento.</Text>

    <FlatList
      data={[1, 2, 3, 4, 5, 6]}
      keyExtractor={item => String(item)}
      showsVerticalScrollIndicator={false}
      renderItem={() => (
        <MenuItem />
      )}
    />        
    </View >
  );
}