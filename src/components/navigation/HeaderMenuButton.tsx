import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export function HeaderMenuButton() {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.button}
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      hitSlop={10}
    >
      <Icon name="menu-outline" size={28} color="#2B2B2B" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 42,
    height: 42,
    marginLeft: 12,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
