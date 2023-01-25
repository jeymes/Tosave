import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { theme } from '../../theme';

import auth from '@react-native-firebase/auth';

export function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleNewAccount(){
    auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => Alert.alert("Conta", "Cadastrado com sucesso!"))
    .catch((error) => console.log(error))
  }

  return (
    <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
        <View style={styles.subContainer}>

          <Text style={styles.title}>
            Cadastrar
          </Text>

            <View style={styles.containerRegister}>
            {/* <Input 
            placeholder='Ex: tosave'
            label='Nome'
            onChangeText={setName}
            value={name}
            /> */}
            
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
            title='Cadastrar'
            color={theme.COLORS.PRIMARY}
            onPress={handleNewAccount}
            />

          <Text style={styles.text}>
            ou
          </Text>

          <Button
            title='Já tenho conta'
            color={theme.COLORS.SECONDARY}
            />

        </View>
    </View>
    </ScrollView>
  );
}