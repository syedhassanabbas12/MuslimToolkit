import React from 'react';
import {useEffect} from 'react';
import {View, StatusBar, StyleSheet, Text} from 'react-native';

const OnBoardingOneScreen = props => {
  useEffect(() => {
    // setTimeout(() => {
    //   console.error("wow");
    // }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />

      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.subTitle}>TOOLKIT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 14,
  },
  subTitle: {
    color: 'gray',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 12,
  },
});

export default OnBoardingOneScreen;
