import React, { useState } from 'react';
import { ActivityIndicator, Alert, View, ScrollView } from 'react-native';

import { styles } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { theme } from '../../theme';
import  firestore  from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

export function New() {

  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(false);

  const [title, setTitle] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  function handleNewOrder(){

    if (title.trim().length === 0) {
      return Alert.alert('Novo Título', 'Informe o nome do Título, para adicionar.');
    }
    if (user.trim().length === 0) {
      return Alert.alert('Novo Usuário', 'Informe um Usuário ou E-mail, para adicionar.');
    }
    if (password.trim().length === 0) {
      return Alert.alert('Nova Senha', 'Informe uma Senha, para adicionar.');
    }
    setLoading(true)
    firestore()
    .collection('notes')
    .add({
      title,
      user,
      password
    })
    .then(() => navigation.navigate('home'))
    .catch((error) => {
      if (error) {
        return Alert.alert('Não foi possivel salvar, tente novamente.');
      }
    })
    .finally(() => setLoading(false))

  }

  return (
    <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <Header
      title='New'
      />
      <View style={styles.subContainer}>
      <Input 
      label='Titulo'
      placeholder='Ex: Senha do to save'
      value={title}
      onChangeText={setTitle}
      />
      <Input 
      label='Usuário ou E-mail'
      placeholder='Ex: tosave@gmail.com'
      value={user}
      onChangeText={setUser}
      />
      <Input 
      label='Senha'
      placeholder='Ex: 12345678'
      value={password}
      onChangeText={setPassword}
      />

      <Button
      title={isLoading ? <ActivityIndicator color="#fff"/> : 'Salvar'}
      color={theme.COLORS.SECONDARY}
      marginTop={60}
      onPress={handleNewOrder}
      />
      </View>
    
    </View>
    </ScrollView>
  );
}