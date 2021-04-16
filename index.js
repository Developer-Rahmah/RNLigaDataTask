import {AppRegistry} from 'react-native';
import t from 'LigaDataTask/base64Polyfill';
import App from 'LigaDataTask/App';
import {name as appName} from 'LigaDataTask/app.json';
import {Provider} from 'react-redux';
import store from 'LigaDataTask/services/redux/store';
import React from 'react';

const Application = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Application, t);
