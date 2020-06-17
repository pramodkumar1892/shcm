/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import App from './src/components/App'
import { Provider } from 'react-redux';
import store from './src/store'

export default () => {
  return (
    <Provider store = { store }>
      <App />
    </Provider>
  );
};
