import React from 'react';
import { Feather } from '@expo/vector-icons';
import { 
  View, 
  Text,
  TextInput,
  Image, 
  TouchableOpacity, 
  ImageBackground,
 } from 'react-native';
 import { useNavigation } from '@react-navigation/native';

import bgImage from '../../assets/1.png';
import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detalhes() {
  const navigation = useNavigation();

  function back() {
    navigation.goBack()
  }

  let state = {
    quantidade: '',
 };
 let handleQuantidade = (text) => {
    setState({ quantidade: text })
 };

  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={back}>
          <Feather name="arrow-left" size={32} color="#888888" />
        </TouchableOpacity>
        
      </View>
      <Text style={styles.title}> Nome do produto</Text>
      <Text style={styles.description}>Descrição do produto</Text>

      

      <View style={styles.item}>
        <ImageBackground source={bgImage} style={styles.bgImage}>
          <View style={styles.itemAlign}>
            <Text style={styles.itemProperty}> Nome do produto</Text>
            <Text style={styles.itemValue}> R$ 99,88  </Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.details}>
            <Text style={styles.detailsTitle}> Descrição do produto:</Text>        
            <Text style={styles.detailsText}> AJKS sd produtoAJKS sd produtoAJKS sd produtoAJKS sd produtoAJKS sd produtoAJKS sd produto
            </Text>        
      </View>

      <View style={styles.controleCarrinho}>
      <TouchableOpacity onPress={back}>
          <Feather name="arrow-left" size={28} color="#888888" />
        </TouchableOpacity>
        <TextInput 
        underlineColorAndroid = "transparent"
        placeholder = "Quantidade"
        autoCapitalize = "none"
        onChangeText = {handleQuantidade}/>
        <TouchableOpacity style={styles.confirmar} onPress={() => { }}>
          <Text style={styles.textoBotao}> Confirmar </Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}