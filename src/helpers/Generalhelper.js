import I18n from '../I18n';
import {Dimensions} from 'react-native';

export function setLanguage(lang) {
  I18n.locale = lang || 'english';
}

export function translate(key) {
  return I18n.t(key);
}

export const widthScreen = Dimensions.get('window').width;
export const heightScreen = Dimensions.get('window').height;
