import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.heroCard}>
          <Text style={styles.heroTitle}>About RecipeHUB</Text>
          <Text style={styles.heroText}>
            RecipeHUB is a recipe discovery app for browsing dishes, opening full
            cooking details and collecting inspiration for everyday meals.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.sectionTitle}>App Overview</Text>
          <Text style={styles.sectionText}>
            The app is focused on simple recipe discovery with visual cards,
            ingredients, instructions and a clean mobile-first navigation flow.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.sectionTitle}>Developer</Text>
          <Text style={styles.sectionText}>
            Built as a React Native learning project and actively expanded with
            new screens, navigation patterns and UI polishing.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.sectionTitle}>Design</Text>
          <Text style={styles.sectionText}>
            The current interface is based on educational food-app mockups and
            adapted into a working mobile layout for this project.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.sectionTitle}>Coming Next</Text>
          <Text style={styles.sectionText}>
            Theme switching, richer settings and more personalization can live
            here next as the project grows.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F8F4',
  },
  screen: {
    flex: 1,
    backgroundColor: '#F8F8F4',
  },
  contentContainer: {
    padding: 20,
    gap: 14,
  },
  heroCard: {
    backgroundColor: '#4E66B7',
    borderRadius: 24,
    padding: 20,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  heroText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#F4F6FF',
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2B2B2B',
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 15,
    lineHeight: 23,
    color: '#5B6270',
  },
});

export default SettingsScreen;
