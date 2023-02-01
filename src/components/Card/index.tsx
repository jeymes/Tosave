import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Trash2 } from "react-native-feather";

import { styles } from './styles';
import { theme } from '../../theme';
import firestore from '@react-native-firebase/firestore';

export type CardProps = {
    id: string;
    title: string;
    user: string;
    password: string;
}

type Props = {
    data: CardProps;
}

export function Card({data}: Props) {

    function handleRemove(){
        firestore()
        .collection('notes')
        .doc(data.id)
        .delete();
      }

  return (
    <TouchableOpacity style={styles.container}>

        <View style={styles.subContainer}>
            
            <View style={styles.containerInfo}>
                <Text style={styles.title}>
                   {data.title}
                </Text>
                <Text style={styles.description}>
                {data.user}
                </Text>
                <Text style={styles.description}>
                    {data.password}
                </Text>
            </View>

            <TouchableOpacity 
            onPress={handleRemove}
            style={styles.button}>
            <Trash2 stroke={theme.COLORS.SUBTEXT} width={32} height={32} />
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
  );
}