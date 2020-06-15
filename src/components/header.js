import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Logo from '../components/logo';

import logoImage from '../assets/logo.png';

export default class Header extends Component {
  render() {
    return <View style={styles.header}>
      <Logo imageSource={logoImage} />
    </View>
  }
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
});
