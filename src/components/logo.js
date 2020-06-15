import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Logo extends Component {
  render() {
    const { imageSource } = this.props

    return <Image source={imageSource}></Image>
  }
}