import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { AuthRoutes } from './Auth.routes';
import { NavigationContainer } from '@react-navigation/native';
import { theme } from '../theme';

import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth'
import { Home } from '../screens/Home';

export function Routes() {

  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null)

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser);

    return subscriber;
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: theme.COLORS.BACKGROUND}}>
    <NavigationContainer>

      {user ? <Home/> : <AuthRoutes/>}

    </NavigationContainer>
    </View>
  );
}