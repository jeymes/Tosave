import React from 'react';
import { View,Text } from 'react-native';
import AnimatedLottieView from 'lottie-react-native';

import { styles } from './styles';

type Props ={
  message: string
}

export function ListEmpty({message}: Props) {
  return (
    <View style={styles.container}>
          <View style={styles.containerAnimation} >
          <AnimatedLottieView 
        source={require('../../assets/note.json')}
        autoPlay={true}
        loop={false}
        />
          </View> 
      <Text style={styles.text}>
         {message}
      </Text>

    </View>
  );
}