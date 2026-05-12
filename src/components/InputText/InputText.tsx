import { TextInput } from 'react-native';
import { InputTextProps } from './InputText.types';
import { styles } from './InputText.styles'

export const InputText = ({label, value, onInput, style}: InputTextProps) => {
    return(
        <TextInput
            style={[styles.input, style]}
            placeholder={label} 
            value={value}
            onChangeText={onInput}
        />
    )
}