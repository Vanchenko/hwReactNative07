import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export function HomeHeaderTitle() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.text}>RecipeHUB</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logo: {
    width: 36,
    height: 36,
  },
  text: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FF6B3D',
    letterSpacing: 0.2,
  },
});
