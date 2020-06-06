import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
} from 'native-base';
import { setAuth } from './../actions/auth.action'

const AppHeader = ({ showBack=false, showLogOut=false, navigation, title }) => {
		const onBack = function () {
			!!navigation && navigation.goBack()			
    }
    const onLogOut = async () => {
      await setAuth({})
      navigation.navigate('Login')
		}
    return (
        <Header>
        {showBack && <Left>
            <Button transparent onPress={onBack}>
              <Icon name="arrow-back" />
            </Button>
          </Left>}
          <Body>
					<Title>{title}</Title>
          </Body>
          {showLogOut && <Right>
            <Button transparent onPress={onLogOut}>
              <Icon name="log-out" />
            </Button>
          </Right>}
        </Header>
    );
}

export default AppHeader
