import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  input: {
    color: Platform.select({android: 'black', ios: undefined}),
    fontFamily: 'montserrat',
    fontSize: 16,
    borderWidth: 2,
    borderRadius: 48,
    width: '100%',
    paddingLeft: 25
  }
});