import { View, Text, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { theme } from '../../theme';

import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

export function Register() {

  const navigation = useNavigation()

  function handleGoBack(){
    navigation.goBack();
  }

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
            marginTop={60}
            title='Cadastrar e Acessar'
            color={theme.COLORS.PRIMARY}
            onPress={handleNewAccount}
            />

          <Button
            marginTop={60}
            title='Já tenho conta'
            color={theme.COLORS.SECONDARY}
            onPress={handleGoBack}
            />

        </View>
    </View>
    </ScrollView>
  );
}