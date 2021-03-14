import React from 'react';
import {useEffect} from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {translate, widthScreen} from '../../helpers/Generalhelper';
// import LOGOSVG from 'src\assets\svg\quran.svg';
import LOGOSVG from '../../assets/svg/quran.svg';
const HomeScreen = props => {
  useEffect(() => {}, []);

  const buttons = [
    {id: 1, name: 'Quran', img: require('../../assets/svg/quran.svg')},
    {id: 2, name: 'Nohay', img: require('../../assets/svg/quran.svg')},
    {id: 3, name: 'Manqabat', img: require('../../assets/svg/quran.svg')},
    {id: 4, name: 'Majalis', img: require('../../assets/svg/quran.svg')},
    // {id: 5, name: 'Quran', img: require('../../assets/svg/quran.svg')},
    // {id: 6, name: 'Quran', img: require('../../assets/svg/quran.svg')},
    // {id: 7, name: 'Quran', img: require('../../assets/svg/quran.svg')},
    // {id: 8, name: 'Quran', img: require('../../assets/svg/quran.svg')},
    // {id: 9, name: 'Quran', img: require('../../assets/svg/quran.svg')},
    // {id: 10, name: 'Quran', img: require('../../assets/svg/quran.svg')},
    // {id: 11, name: 'Quran', img: require('../../assets/svg/quran.svg')},
    // {id: 12, name: 'Quran', img: require('../../assets/svg/quran.svg')},
    // {id: 13, name: 'Quran', img: require('../../assets/svg/quran.svg')},
    // {id: 14, name: 'Quran', img: require('../../assets/svg/quran.svg')},
    // {id: 15, name: 'Quran', img: require('../../assets/svg/quran.svg')},
  ];

  const renderIcons = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.IconContainer}>
        <LOGOSVG width={75} height={75} />
        <Text style={styles.iconLabel}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <Text>{translate('SPLASH_TITLE')}</Text>
      <FlatList
        style={styles.FlatList}
        data={buttons}
        renderItem={renderIcons}
        numColumns={2}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainerStyle: {
    alignSelf: 'center',
    alignItems: 'flex-start',
  },
  IconContainer: {
    backgroundColor: 'white',
    height: 120,
    width: widthScreen * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 8,
    elevation: 6,
  },
  iconLabel: {
    letterSpacing: 2,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default HomeScreen;
