import React from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import {CreateAppContainer, CreateSwitchNavigator} from 'react-navigation';
import {CreateBottomTabNavigator} from 'react-navigation-tabs';
import WelcomeScreen from './screens/WelcomeScreen';
import AppTabNavigator from '.components/AppTabNavigator';

export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: WelcomeScreen,
  BottomTab: AppTabNavigator
})

const AppContainer = CreateAppContainer(switchNavigator);
