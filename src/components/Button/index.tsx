import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
    title: any;
    color: string;
    marginTop: number;
}

export function Button({title, color, marginTop, ...rest}: Props) {
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
    marginTop: marginTop,
     }}
    >
        <Text style={styles.title}>
            {title}
        </Text>
    </TouchableOpacity>
  );
}