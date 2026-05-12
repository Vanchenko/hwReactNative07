import React from 'react';
import { StyleSheet } from 'react-native';
import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import Icon from '@react-native-vector-icons/ionicons';
import { ROUTES } from '../constants/routes';
import MainTabNavigator from './MainTabNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import { DrawerContent, HeaderMenuButton } from '../components';
import { MainDrawerParamList } from './types';

const Drawer = createDrawerNavigator<MainDrawerParamList>();

const renderHomeDrawerIcon = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => <Icon name="home-outline" size={size} color={color} />;

const renderSettingsDrawerIcon = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => <Icon name="settings-outline" size={size} color={color} />;

export default function MainDrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName={ROUTES.MAIN_TABS}
      drawerContent={DrawerContent}
      screenOptions={DRAWER_SCREEN_OPTIONS}
    >
      <Drawer.Screen
        name={ROUTES.MAIN_TABS}
        component={MainTabNavigator}
        options={{
          title: 'Home',
          headerShown: false,
          drawerIcon: renderHomeDrawerIcon,
        }}
      />
      <Drawer.Screen
        name={ROUTES.SETTINGS}
        component={SettingsScreen}
        options={{
          title: 'Settings',
          drawerIcon: renderSettingsDrawerIcon,
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  scene: {
    backgroundColor: '#F8F8F4',
  },
  header: {
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2B2B2B',
  },
  drawer: {
    width: 292,
    backgroundColor: '#F8F8F4',
  },
  drawerLabel: {
    fontSize: 15,
    fontWeight: '600',
    marginLeft: -8,
  },
});

const DRAWER_SCREEN_OPTIONS: DrawerNavigationOptions = {
  drawerType: 'front',
  overlayColor: 'rgba(29, 34, 48, 0.32)',
  drawerActiveTintColor: '#FF6B3D',
  drawerInactiveTintColor: '#4F5A6E',
  drawerActiveBackgroundColor: '#FFF3EE',
  drawerLabelStyle: styles.drawerLabel,
  drawerStyle: styles.drawer,
  sceneStyle: styles.scene,
  headerStyle: styles.header,
  headerShadowVisible: false,
  headerTitleStyle: styles.headerTitle,
  headerLeft: HeaderMenuButton,
};
