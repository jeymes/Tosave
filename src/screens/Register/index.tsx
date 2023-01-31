import { View, Text, ScrollView, Alert, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { theme } from '../../theme';

import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

export function Register() {

  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(false);

  function handleGoBack(){
    navigation.goBack();
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleNewAccount(){
    setIsLoading(true)
    if (email.trim().length === 0) {
      return Alert.alert('Nova Conta', 'Informe um e-mail para cadastrar.');
    }
    if (password.trim().length === 0) {
      return Alert.alert('Nova Conta', 'Informe uma senha para cadastrar.');
    }
    auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => Alert.alert("Conta", "Cadastrado com sucesso!"))
    .then(() => navigation.navigate('login'))
    .catch((error) => {
      console.log(error)

      if(error.code === 'auth/email-already-in-use') {
        return Alert.alert('E-mail não disponível, escolha outro e-mail para cadastrar.')
      }
      if(error.code === 'auth/weak-password') {
        return Alert.alert('A senha deve ter pelo menos 6 caracteres.')
      }
      if(error.code === 'auth/invalid-email') {
        return Alert.alert('O endereço de e-mail está mal formatado.')
      }
    })
    .finally( () =>
      setIsLoading(false)
    )
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
            title={isLoading ? <ActivityIndicator color="#fff"/> : ' Criar e acessar'}
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