// import {Typography} from '@theme';
import {StyleSheet, Platform} from 'react-native';

export const buttonStyles = StyleSheet.create({
  center: {
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    // fontSize: Typography.fontSize(18),
    shadowOpacity: 0,
    marginHorizontal: 8,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    // fontSize: Typography.fontSize(18),
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  default: {
    minWidth: 160,
    maxWidth: 160,
  },
  small: {
    height: 26,
    paddingVertical: Platform.OS === 'ios' ? 4 : 2,
    paddingHorizontal: 25,
  },
  largeSmall: {
    height: Platform.OS === 'ios' ? 42 : 44,
    paddingVertical: 10,
  },
  large: {
    width: '100%',
  },
  smallText: {
    // fontSize: Typography.fontSize(14),
  },
  largeIcon: {
    height: 50,
    paddingVertical: 10,
  },
  largeText: {
    // fontSize: Typography.fontSize(18),
  },
});
