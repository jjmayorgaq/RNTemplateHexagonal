import React from 'react';
import LoginPresenter from '../Login/Login.presenter';
import RecoverPasswordPresenter from '../RecoverPassword/RecoverPassword.presenter';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Auth = createNativeStackNavigator();

export default function AuthModule({}: {}) {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="Login"
        component={LoginPresenter}
        options={{headerShown: false}}
      />
      <Auth.Screen
        name="RecoverPassword"
        component={RecoverPasswordPresenter}
        options={{headerShown: false}}
      />
    </Auth.Navigator>
  );
}
