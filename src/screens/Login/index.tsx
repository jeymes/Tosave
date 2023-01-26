import { View, Text, ScrollView, Modal, Alert, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { theme } from '../../theme';

import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

export function Login() {

  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  function handleNewAccount(){
    navigation.navigate('register')
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(){
    if (email.trim().length === 0) {
      return Alert.alert('Acessar Conta', 'Informe um e-mail cadastrado para acessar.');
    }
    if (password.trim().length === 0) {
      return Alert.alert('Acessar Conta', 'Informe uma senha cadastrada para acessar.');
    }
    auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => {
      console.log(error)

      if(error.code === 'auth/wrong-password') {
        return Alert.alert('A senha é inválida ou o usuário não possui uma senha.')
      }
      if(error.code === 'auth/invalid-email') {
        return Alert.alert('O endereço de e-mail está mal formatado.')
      }
      if(error.code === 'auth/too-many-requests') {
        return Alert.alert('Bloqueamos todas as solicitações deste dispositivo devido a atividades incomuns. Tente mais tarde.')
      }
      if(error.code === 'auth/user-not-found') {
        return Alert.alert('Não há registro de usuário correspondente a este e-mail.')
      }
    })
  }
  function handleForgotPassword(){
    if (email.trim().length === 0) {
      return Alert.alert('Redefinir Senha', 'Informe um e-mail cadastrado para redefinir sua senha.');
    }
    auth()
    .sendPasswordResetEmail(email)
    .then(() => Alert.alert("Redefinir senha", "Enviamos um e-mail para você."))
    .catch((error) => {
      console.log(error)

      if(error.code === 'auth/user-not-found') {
        return Alert.alert('Não há registro de usuário correspondente a este e-mail.')
      }
      if(error.code === 'auth/invalid-email') {
        return Alert.alert('O endereço de e-mail está mal formatado.')
      }
      if(error.code === 'auth/too-many-requests') {
        return Alert.alert('Bloqueamos todas as solicitações deste dispositivo devido a atividades incomuns. Tente mais tarde.')
      }
    })
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
            marginTop={60}
            title='Entrar'
            color={theme.COLORS.PRIMARY}
            onPress={handleLogin}
            />

            <View style={styles.containerButton}>
            <Button
            marginTop={60}
            title='Cadastra-se'
            color={theme.COLORS.SECONDARY}
            onPress={handleNewAccount}
            />
            <Button
            marginTop={60}
            title='Redefinir Senha'
            color={theme.COLORS.SECONDARY}
            onPress={() => setModalVisible(true)}
            />

            <View style={styles.containerModal}>
              <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={
                  () => {
                      Alert.alert("Envio Concluido...");
                      setModalVisible(!modalVisible);
                  }
          }
              >
              <View style={styles.containerModal}>
              <TouchableOpacity 
              onPress={() => setModalVisible(false)}
              style={styles.subContainerModal}
              >
                <View style={styles.modal}>
                <TouchableOpacity 
                onPress={() => setModalVisible(false)}
                style={styles.buttonX}>
                    <Text style={styles.textX}>
                      X
                    </Text>
                  </TouchableOpacity>
                  <Text style={styles.textModal}>
                  Redefinir Senha
                  </Text>
                  <View style={styles.containerInputModal}>
                  <Input
                  label='E-mail'
                  placeholder='Ex: tosave@gmail.com'
                  onChangeText={setEmail}
                  value={email}
                  />
                  </View>
                  <View style={styles.containerButtonModal}>
                  <Button
                    marginTop={0}
                    title='Enviar'
                    color={theme.COLORS.PRIMARY}
                    onPress={handleForgotPassword}
                  />
                  
                  </View>
                </View>
              </TouchableOpacity>
              </View>
              </Modal>
             
            </View>

            </View>
        </View>
    </View>
    </ScrollView>
  );
}