import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {
  heightScreen,
  setLanguage,
  translate,
  widthScreen,
} from '../../helpers/Generalhelper';
// import {PrayTimes} from '../../helpers/PrayTimes';
import {COLOR, LANGUAGES} from '../../constants/GenericConstants';

const SettingScreen = props => {
  const [userName, changeUserName] = useState();
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [Loading, setLoading] = useState(false);

  useEffect(() => {}, []);

  const onLanguageChange = lan => {
    setLanguage(lan);
    setSelectedLanguage(lan);
  };

  const saveSettings = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };
  // console.log('PrayTimes.js', PrayTimes().getTimes(new Date(), [43, -80], -5));

  return (
    <>
      <View style={styles.container}>
        <StatusBar hidden={false} />

        <View style={styles.TextInputContainer}>
          <Text style={{color: COLOR.SECONDARY}}>
            {translate('label.enterName')}
          </Text>
          <TextInput
            editable={!Loading}
            style={styles.TextInput}
            value={userName}
            placeholder={translate('placeholder.username')}
            onChangeText={newName => changeUserName(newName)}
          />
        </View>
        <View style={styles.PickerConatiner}>
          <Text style={{color: COLOR.SECONDARY}}>
            {translate('label.selectLanguage')}
          </Text>
          <Picker
            enabled={!Loading}
            style={styles.Picker}
            selectedValue={selectedLanguage}
            style={styles.Picker}
            onValueChange={(itemValue, itemIndex) =>
              onLanguageChange(itemValue)
            }>
            {LANGUAGES.map(lan => (
              <Picker.Item
                key={lan.value}
                label={lan.label}
                value={lan.value}
              />
            ))}
          </Picker>
        </View>

        {Loading && (
          <ActivityIndicator
            style={styles.loading}
            color={'white'}
            size="large"
          />
        )}

        <TouchableOpacity style={styles.button} onPress={saveSettings}>
          <Text style={styles.buttonText}>{translate('button.save')}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loaderConatienr: {
    position: 'absolute',
    width: widthScreen,
    height: heightScreen,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
    zIndex: 10000000,
  },
  loading: {
    position: 'absolute',
    backgroundColor: 'blue',
    borderRadius: 20,
    elevation: 4,
    zIndex: 10000000,
  },
  TextInputContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 4,
    width: widthScreen * 0.8,
    height: 70,
    paddingHorizontal: 5,
  },
  TextInput: {
    backgroundColor: 'white',
    width: widthScreen * 0.75,
  },
  PickerConatiner: {
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 4,
    width: widthScreen * 0.8,
    height: 70,
    paddingHorizontal: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  Picker: {
    width: widthScreen * 0.8,
  },
  button: {
    width: widthScreen * 0.7,
    height: 55,
    backgroundColor: COLOR.PRIMARY,
    borderRadius: 8,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default SettingScreen;
