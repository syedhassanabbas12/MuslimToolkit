import React from 'react';
import {useEffect} from 'react';
import {View, StatusBar, StyleSheet, Text, ImageBackground} from 'react-native';
import { COLOR } from '../../constants/GenericConstants';
import RouteConstants from '../../constants/RouteConstants';
import {translate} from '../../helpers/Generalhelper';

const SplashScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      // props.navigation.replace(RouteConstants.ON_BOARDING_1_SCREEN);
      props.navigation.replace(RouteConstants.HOME_SCREENS_GROUP);
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.imageContainer}>
        <ImageBackground
          resizeMode="contain"
          style={styles.ImageBackground}
          source={require('../../assets/images/splash.jpg')}
        />
      </View>
      <Text style={styles.title}>{translate('SPLASH_TITLE')}</Text>
      <Text style={styles.subTitle}>{translate('SPLASH_SUB_TITLE')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '100%',
    height: '35%',
  },
  ImageBackground: {
    width: '100%',
    height: '100%',
  },
  title: {
    color: COLOR.PRIMARY,
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 14,
  },
  subTitle: {
    color: COLOR.SECONDARY,
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 12,
  },
});

export default SplashScreen;
