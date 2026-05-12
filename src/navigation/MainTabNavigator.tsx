import React from 'react';
import { StyleSheet } from 'react-native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import type { ComponentType } from 'react';
import { ROUTES } from '../constants/routes';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import { HeaderMenuButton, HomeHeaderTitle, TabBarIcon } from '../components';
import { MainTabParamList } from './types';

const Tab = createBottomTabNavigator<MainTabParamList>();
type TabRouteName = keyof MainTabParamList;

type TabConfig = {
  name: TabRouteName;
  title: string;
  component: ComponentType<any>;
};

const TAB_SCREENS: TabConfig[] = [
  {
    name: ROUTES.HOME,
    title: 'RecipeHUB',
    component: HomeScreen,
  },
  {
    name: ROUTES.SEARCH,
    title: 'Search',
    component: SearchScreen,
  },
  {
    name: ROUTES.FAVORITES,
    title: 'Favorites',
    component: FavoritesScreen,
  },
];

const TAB_BAR_ICONS: Record<
  TabRouteName,
  NonNullable<BottomTabNavigationOptions['tabBarIcon']>
> = {
  [ROUTES.HOME]: props => <TabBarIcon {...props} routeName={ROUTES.HOME} />,
  [ROUTES.SEARCH]: props => <TabBarIcon {...props} routeName={ROUTES.SEARCH} />,
  [ROUTES.FAVORITES]: props => (
    <TabBarIcon {...props} routeName={ROUTES.FAVORITES} />
  ),
};

export default function MainTabNavigator() {
  return (
    <Tab.Navigator initialRouteName={ROUTES.HOME} screenOptions={TAB_SCREEN_OPTIONS}>
      {TAB_SCREENS.map(({ name, title, component }) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={{
            title,
            tabBarIcon: TAB_BAR_ICONS[name],
            ...(name === ROUTES.HOME ? { headerTitle: HomeHeaderTitle } : null),
          }}
        />
      ))}
    </Tab.Navigator>
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
  tabBar: {
    height: 82,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    backgroundColor: '#4E66B7',
    borderTopWidth: 0,
    paddingTop: 12,
    paddingBottom: 3,
    paddingHorizontal: 14,
    elevation: 18,
    shadowColor: '#27355F',
    shadowOpacity: 0.18,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowRadius: 12,
  },
  tabBarItem: {
    borderRadius: 20,
  },
});

const TAB_SCREEN_OPTIONS: BottomTabNavigationOptions = {
  headerTitleAlign: 'center',
  headerStyle: styles.header,
  headerShadowVisible: false,
  headerTitleStyle: styles.headerTitle,
  headerLeft: HeaderMenuButton,
  sceneStyle: styles.scene,
  tabBarActiveTintColor: '#FF6B3D',
  tabBarInactiveTintColor: '#FFFFFF',
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  tabBarStyle: styles.tabBar,
  tabBarItemStyle: styles.tabBarItem,
};
