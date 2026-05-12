import { ViewStyle } from 'react-native';

export interface ControlButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}