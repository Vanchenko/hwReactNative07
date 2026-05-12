import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import { ROUTES } from '../../constants/routes';
import { MainTabParamList } from '../../navigation/types';

type TabRouteName = keyof MainTabParamList;
type TabIconName =
  | 'home'
  | 'home-outline'
  | 'search'
  | 'heart'
  | 'heart-outline';

type TabBarIconProps = {
  color: string;
  focused: boolean;
  routeName: TabRouteName;
  size?: number;
};

const TAB_META: Record<
  TabRouteName,
  {
    label: string;
    activeIcon: TabIconName;
    inactiveIcon: TabIconName;
  }
> = {
  [ROUTES.HOME]: {
    label: 'Home',
    activeIcon: 'home',
    inactiveIcon: 'home-outline',
  },
  [ROUTES.SEARCH]: {
    label: 'Search',
    activeIcon: 'search',
    inactiveIcon: 'search',
  },
  [ROUTES.FAVORITES]: {
    label: 'Favorites',
    activeIcon: 'heart',
    inactiveIcon: 'heart-outline',
  },
};

export function TabBarIcon({
  color,
  focused,
  routeName,
  size = 22,
}: TabBarIconProps) {
  const meta = TAB_META[routeName];
  const iconName = focused ? meta.activeIcon : meta.inactiveIcon;

  return (
    <View
      style={[
        styles.tabVisual,
        focused ? styles.tabVisualActive : styles.tabVisualInactive,
      ]}
    >
      <View style={focused ? styles.activeOuterCircle : styles.iconSlot}>
        <View style={focused ? styles.activeInnerCircle : styles.iconWrapper}>
          <Icon name={iconName} size={size} color={focused ? '#FFFFFF' : color} />
        </View>
      </View>

      <Text
        style={[
          styles.tabLabel,
          focused ? styles.tabLabelActive : styles.tabLabelInactive,
        ]}
      >
        {meta.label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tabVisual: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    minWidth: 84,
  },
  tabVisualInactive: {
    gap: 1,
    paddingTop: 8,
  },
  tabVisualActive: {
    gap: 2,
    paddingTop: 2,
  },
  iconSlot: {
    width: 62,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeOuterCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -5,
    marginBottom: 2,
  },
  activeInnerCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FF6B3D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '500',
  },
  tabLabelInactive: {
    color: '#FFFFFF',
    opacity: 0.92,
  },
  tabLabelActive: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});
