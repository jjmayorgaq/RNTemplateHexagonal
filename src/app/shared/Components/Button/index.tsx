/* eslint-disable no-extra-boolean-cast */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {buttonStyles} from './Button.styles';

const ButtonComponent: React.FC<{
  label?: string;
  fill?: 'solid' | 'outline' | 'transparent';
  disabled?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  size?: 'small' | 'default' | 'large' | 'largeSmall' | 'largeIcon';
  style?: ViewStyle;
  textStyle?: TextStyle;
  iconStyle?: TextStyle;
}> = ({
  fill = 'solid',
  size = 'large',
  disabled = false,
  onPress,
  style,
  textStyle,
  iconStyle,
}) => {
  const styles = StyleSheet.create({
    ...buttonStyles,
    button: {
      ...buttonStyles[size],
      ...(!!style ? style : {}),
    },
    text: {
      ...buttonStyles[size === 'small' ? 'smallText' : 'largeText'],
      ...(!!textStyle ? textStyle : {}),
      textAlign: 'center',
    },
    icon: {
      ...buttonStyles.icon,
      ...(!!iconStyle ? iconStyle : {}),
    },
  });

  return (
    <TouchableOpacity
      style={{opacity: disabled ? (fill === 'solid' ? 0.5 : 0.2) : 1}}
      disabled={disabled}
      onPress={onPress}
      // eslint-disable-next-line react-native/no-inline-styles
    ></TouchableOpacity>
  );
};

export default ButtonComponent;
