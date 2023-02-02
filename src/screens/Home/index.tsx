import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { Card, CardProps } from '../../components/Card';
import { LogOut } from "react-native-feather";

import { theme } from '../../theme';

import firestore from '@react-native-firebase/firestore';
import { ListEmpty } from '../../components/ListEmpty';

export function Home() {

  const [isLoading, setLoading] = useState(false);
  const [notes, setNotes] = useState<CardProps[]>([]);


  useEffect(() => {
    setLoading(true)
    const subscribe = firestore()
    .collection('notes')
    .onSnapshot(querySnapshot => {
      const data = querySnapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      }) as CardProps[];
      setNotes(data)
    })
    setLoading(false)

    return () => subscribe();
  }, [])


  return (
    <View style={styles.container}>
      <Header
      button={
      <LogOut stroke={theme.COLORS.PRIMARY} width={32} height={32} />
    }
      title='To save'
      />

{
        isLoading ? <ActivityIndicator 
        color={theme.COLORS.PRIMARY} 
        style={{flex: 1}} /> :
        <FlatList
    data={notes}
    keyExtractor={item => item.id}
    renderItem={({ item }) => (
      <Card
        data={item}
      />
    )}
    contentContainerStyle={notes.length === 0 && { flex:1}}
    ListEmptyComponent={() => (
      <ListEmpty
      message='Que tal cadastrar a primeira Senha.'
      />
    )}
    showsVerticalScrollIndicator={false}
  />
    
    }
   
    </View>
  );
}