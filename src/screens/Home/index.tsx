import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { Header } from '../../components/Header';

export function Home() {
  return (
    <View style={styles.container}>
      <Header/>
    <Text>
      Jeymes
    </Text>

    </View>
  );
}