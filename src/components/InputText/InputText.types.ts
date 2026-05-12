import { StyleProp, TextStyle } from 'react-native';

export interface InputTextProps {
  label: string;
  value: string;
  onInput: (text: string) => void;
  style?: StyleProp<TextStyle>;
}