import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import {SignOut} from 'phosphor-react-native';

import auth from '@react-native-firebase/auth'
import { theme } from '../../theme';

export function Header() {

  function handleSignOut(){
    auth().signOut();
  }

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>

      <Text style={styles.title}>
        To save
      </Text>

      <TouchableOpacity onPress={handleSignOut}>
        <Text>
          Sair
        </Text>
      {/* <SignOut size={32} weight="bold" color='red' /> */}
      </TouchableOpacity>
      </View>
    </View>
  );
}