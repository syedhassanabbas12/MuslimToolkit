import 'react-native-gesture-handler';
import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SplashScreen from './src/components/SplashScreen/SplashScreen';
import OnBoardingOneScreen from './src/components/OnBoardings/OnBoardingOne';
import RouteConstants from './src/constants/RouteConstants';
import HomeScreen from './src/components/HomeScreen/HomeScreen';
import SettingScreen from './src/components/SettingScreen/SettingScreen';

import GearIconFilled from 'react-native-vector-icons/FontAwesome';
import GearIconEmpty from 'react-native-vector-icons/EvilIcons';
import HomeIcon from 'react-native-vector-icons/Ionicons';
import HeartIcon from 'react-native-vector-icons/MaterialIcons';
import {COLOR} from './src/constants/GenericConstants';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={RouteConstants.HOME_SCREEN}
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({focused, color, size}) => {
            let iconName = focused ? 'home' : 'home-outline';
            color = focused ? COLOR.PRIMARY : COLOR.SECONDARY;
            return <HomeIcon name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name={RouteConstants.FAVORITE_SCREEN}
        component={OnBoardingOneScreen}
        options={{
          title: 'Favorites',
          tabBarIcon: ({focused, color, size}) => {
            let iconName = focused ? 'favorite' : 'favorite-outline';
            color = focused ? COLOR.PRIMARY : COLOR.SECONDARY;
            return <HeartIcon name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name={RouteConstants.SETTINGS_SCREEN}
        component={SettingScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({focused, color, size}) => {
            let iconName = 'gear';
            color = focused ? COLOR.PRIMARY : COLOR.SECONDARY;
            let activeIcon = focused ? (
              <GearIconFilled name={iconName} size={size} color={color} />
            ) : (
              <GearIconEmpty name={iconName} size={size} color={color} />
            );
            return activeIcon;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={RouteConstants.SPLASH_SCREEN}
          component={SplashScreen}
          options={{header: () => null}}
        />
        {/* <Stack.Screen
          name={RouteConstants.ON_BOARDING_1_SCREEN}
          component={OnBoardingOneScreen}
          options={{header: () => null}}
        /> */}
        <Stack.Screen
          name={RouteConstants.HOME_SCREENS_GROUP}
          component={Home}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
