import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.card}>
        <Text style={styles.title}>Search recipes</Text>
        <Text style={styles.text}>
          This tab is ready for recipe search. We can connect inputs, filters and
          API requests here next.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F4F7F2',
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2B2B2B',
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#5E6470',
  },
});

export default SearchScreen;
