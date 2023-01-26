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
    auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => console.log(error))
  }
  function handleForgotPassword(){
    auth()
    .sendPasswordResetEmail(email)
    .then(() => Alert.alert("Redefinir senha", "Enviamos um e-mail para você"))
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

            <View style={styles.containerButton}>
            <Button
            title='Cadastra-se'
            color={theme.COLORS.SECONDARY}
            onPress={handleNewAccount}
            />
            <Button
            title='Recuperar senha'
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
                    Recuperar senha
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