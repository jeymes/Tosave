import React from 'react';
import { TextInput, View, Text, TextInputProps } from 'react-native';
import { styles } from './styles';
import { theme } from '../../theme';

type Props = TextInputProps &{
  label: string;
}

export function Input({label, ...rest}: Props) {

  return (
    <View style={styles.containerInput}>
      <Text style={styles.label} >
        {label}
      </Text>
    <TextInput 
    {...rest}
    placeholderTextColor={theme.COLORS.SUBTEXT}
    selectionColor={theme.COLORS.PRIMARY}
    style={styles.input}/>
    </View>
  );
}