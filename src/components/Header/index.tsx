import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { LogOut } from "react-native-feather";

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
      <LogOut stroke={theme.COLORS.PRIMARY} width={32} height={32} />
      </TouchableOpacity>
      </View>
    </View>
  );
}