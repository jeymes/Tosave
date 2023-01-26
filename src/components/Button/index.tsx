import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
    title: string;
    color: string;
}

export function Button({title, color, ...rest}: Props) {
  return (
    <TouchableOpacity 
    {...rest}
    style={{
    backgroundColor: `${color}`,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderRadius: 10,
    marginTop: 50
     }}
    >
        <Text style={styles.title}>
            {title}
        </Text>
    </TouchableOpacity>
  );
}