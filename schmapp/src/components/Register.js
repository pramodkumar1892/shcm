/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {StyleSheet} from 'react-native';
import {Button, Container, Content, Form, Item, Input, Text} from 'native-base';
import Header from './Header'
import { register } from './../actions/auth.action'

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

const App = ({ navigation }) => {
  const [registerState, setRegisterState] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
    active: 1
  })
  const onChange = (field) => (value) => {
    setRegisterState({
      ...registerState,
      [field]: value
    })
  }
  const onSubmit = () => {
    console.log(registerState)
  }
  return (
    <Container style={styles.container}>
      <Header showBack navigation={navigation} title='Register' />
      <Content contentContainerStyle={styles.content}>
        <Form style={styles.form}>
          <Item style={styles.margin10}>
            <Input onChangeText={onChange('first_name')} name='first_name' value={registerState.first_name} placeholder="FirstName" />
          </Item>
          <Item style={styles.margin10}>
            <Input onChangeText={onChange('last_name')} name='last_name' value={registerState.last_name} placeholder="LastName" />
          </Item>
          <Item style={styles.margin10}>
            <Input onChangeText={onChange('email')} name='email' value={registerState.email} placeholder="Email" />
          </Item>
					<Item style={styles.margin10}>
            <Input onChangeText={onChange('password')} name='password' value={registerState.password} secureTextEntry={true} placeholder="Password" />
          </Item>
					<Item style={styles.margin10}>
            <Input onChangeText={onChange('confirm_password')} name='confirm_password' value={registerState.confirm_password} secureTextEntry={true} placeholder="Confirm Password" />
          </Item>
          <Button onPress={onSubmit} style={styles.margin10} block>
            <Text>Request</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default App;
