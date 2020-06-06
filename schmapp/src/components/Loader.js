/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import isEmpty from 'lodash.isempty'
import {StyleSheet, ActivityIndicator} from 'react-native';
import { Container, Content, Spinner} from 'native-base';
import { getAuth } from './../actions/auth.action'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    }
  });

const Loader = ({ navigation  }) => {
    useEffect(async () => {
		const auth = await getAuth()
		if (isEmpty(auth)) {
			navigation.navigate('Login')
		} else {
			navigation.navigate('Dashboard')
		}
	}, [])
  return (
    <Container style={styles.container}>
        <ActivityIndicator size={100} color='blue' />
    </Container>
  );
};

export default Loader;
