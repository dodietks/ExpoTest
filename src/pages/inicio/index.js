import React, { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/header';
import styles from './styles';

export default function inicio() {
  const navigation = useNavigation();

  function goQr() {
    navigation.navigate('Qr');
  }
  function goCardapio() {
    navigation.navigate('Cardapio');
  }

  return (
    <View style={styles.container} >
      <Header />
      <Text style={styles.title}> Entrar</Text>
      <Text style={styles.description}>Escolha uma das opções</Text>

      <View style={styles.qrcode}>
      <TouchableOpacity 
        style={styles.botao}
        onPress={goQr}
        >          
          <FontAwesome name="qrcode" size={300} color="#5082C9" />
        </TouchableOpacity>
      </View>

      <View style={styles.controleBotoes}>
        <TouchableOpacity 
        style={styles.botao}
        onPress={goCardapio}
        >          
          <FontAwesome name="google" size={64} color="#5082C9" />
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.botao}
        onPress={goCardapio}
        >
          <FontAwesome name="facebook-square" size={64} color="#5082C9" />
        </TouchableOpacity>
      </View>
    </View>
  );
}