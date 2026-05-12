import React from 'react';
import {
  Alert,
  BackHandler,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon from '@react-native-vector-icons/ionicons';

function handleExitPress() {
  if (Platform.OS === 'android') {
    BackHandler.exitApp();
    return;
  }

  Alert.alert('Exit unavailable', 'Programmatic exit is only enabled on Android.');
}

export function DrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>RecipeHUB</Text>
        <Text style={styles.headerText}>
          Quick access to the main app area and project settings.
        </Text>
      </View>

      <View style={styles.itemsCard}>
        <DrawerItemList {...props} />
      </View>

      <View style={styles.footer}>
        <Pressable style={styles.exitButton} onPress={handleExitPress}>
          <Icon name="exit-outline" size={18} color="#FFFFFF" />
          <Text style={styles.exitButtonText}>Exit</Text>
        </Pressable>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    paddingTop: 0,
  },
  header: {
    backgroundColor: '#4E66B7',
    marginHorizontal: 12,
    marginTop: 12,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 54,
    paddingBottom: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  headerText: {
    fontSize: 14,
    lineHeight: 21,
    color: '#E9EEFF',
  },
  itemsCard: {
    marginHorizontal: 12,
    marginTop: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 8,
    overflow: 'hidden',
  },
  footer: {
    marginTop: 'auto',
    marginHorizontal: 16,
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
  },
  exitButton: {
    marginTop: 18,
    backgroundColor: '#FF6B3D',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  exitButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});
