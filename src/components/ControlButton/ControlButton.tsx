import { TouchableOpacity, Text } from 'react-native';
import { ControlButtonProps } from './ControlButton.types.ts';
import { styles } from './ControlButton.styles.ts';

export const ControlButton = ({ title, onPress, style }: ControlButtonProps) => {

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style]}
      activeOpacity={0.6}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};