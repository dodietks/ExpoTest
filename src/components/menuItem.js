import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class menuItem extends Component {
  render() {
    return (
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Ionicons name="ios-add"  size={16} />
                  <Text>Mains info</Text>
                </Button>
              </Left>
              <Right>
                <Text>R$ 99,88</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
    );
  }
}