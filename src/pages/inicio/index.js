import React, { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function inicio() {
  const navigation = useNavigation();

  function goQr() {
    navigation.navigate('Qr');
  }
  function goCardapio() {
    navigation.navigate('Cardapio');
  }

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <Image source={logoImg} />

      </View>
      <Text style={styles.title}> Entrar</Text>
      <Text style={styles.description}>Escolha uma das opções</Text>

      <View style={styles.qrcode}>
      
        <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
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