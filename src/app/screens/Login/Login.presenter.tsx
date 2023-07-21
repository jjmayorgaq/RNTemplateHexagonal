import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import FormLoginComponent from '../Auth/components/FormLogin';

const LoginPresenter = ({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) => {
  
  

  return (
    <View style={{flex: 1}}>
      <FormLoginComponent navigation={navigation}></FormLoginComponent>
    </View>
  );
};

export default LoginPresenter;
