import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import auth from '@react-native-firebase/auth'

type Props ={
  title: string
  button?: any
}

export function Header({title, button}:Props) {

  function handleSignOut(){
    auth().signOut();
  }

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>

      <Text style={styles.title}>
        {title}
      </Text>

      <TouchableOpacity onPress={handleSignOut}>
        {button}
      </TouchableOpacity>
      </View>
    </View>
  );
}