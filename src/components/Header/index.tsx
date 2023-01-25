import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
      <Text style={styles.title}>
        To save
      </Text>
      </View>
      
    </View>
  );
}