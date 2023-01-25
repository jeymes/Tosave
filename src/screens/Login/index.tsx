import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { theme } from '../../theme';

import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

export function Login() {

  const navigation = useNavigation();

  function handleNewAccount(){
    navigation.navigate('register')
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(){
    auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => Alert.alert("Logado com sucesso!"))
    .catch((error) => console.log(error))
  }

  return (
    <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
        <View style={styles.subContainer}>

          <Text style={styles.title}>
            Login
          </Text>

            <View style={styles.containerRegister}>
          
            <Input 
            placeholder='Ex: tosave@gmail.com'
            label='E-mail'
            onChangeText={setEmail}
            value={email}
            />
            <Input 
            placeholder='Ex: 12345678'
            label='Senha'
            onChangeText={setPassword}
            value={password}
            />
            </View>

            <Button
            title='Entrar'
            color={theme.COLORS.PRIMARY}
            onPress={handleLogin}
            />

          <Text style={styles.text}>
            ou
          </Text>

          <Button
            title='Cadastra-se'
            color={theme.COLORS.SECONDARY}
            onPress={handleNewAccount}
            />

        </View>
    </View>
    </ScrollView>
  );
}