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
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
},
});
const AppHeader = ({ showBack=false, showMenu=false, navigation, title }) => {
		const onBack = function () {
			!!navigation && navigation.goBack()			
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
          {showMenu && <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>}
        </Header>
    );
}

export default AppHeader
