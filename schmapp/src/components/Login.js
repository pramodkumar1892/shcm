/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Button, Container, Content, Form, Item, Input, Text} from 'native-base';
import Header from './Header'

const styles = StyleSheet.create({
    container: {
		},
		content: {
			display: "flex",
			// alignItems: "center",
			justifyContent: "center",
			flexDirection: "column",
			height: '100%',
			marginLeft: 10,
			marginRight: 10,
			// backgroundColor: 'red',
    },
    form: {
		},
		margin10: {
			marginTop: 10,
			marginBottom: 10
		},
    temp: {
			backgroundColor: 'red',
    },
  });

const App = ({ navigation  }) => {
	const onRegister = function () {
		navigation.navigate('Register')
	}
  return (
    <Container style={styles.container}>
      <Header title='Signin' />
      <Content contentContainerStyle={styles.content}>
        <Form style={styles.form}>
          <Item style={styles.margin10}>
            <Input placeholder="Username" />
          </Item>
          <Item style={styles.margin10}>
            <Input placeholder="Password" />
          </Item>
          <Button style={styles.margin10} block>
            <Text>Login</Text>
          </Button>
          <Button onPress={onRegister} style={styles.margin10} block>
            <Text>Register</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default App;
