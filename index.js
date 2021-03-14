/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './InitializeApp';
import {name as appName} from './app.json';
// import { setLanguage } from './src/helpers/Generalhelper';
// import RNLocalize from 'react-native-localize';
// console.log(RNLocalize.getLocales()[0].languageTag);
// setLanguage(RNLocalize.getLocales()[0].languageTag);
AppRegistry.registerComponent(appName, () => App);
