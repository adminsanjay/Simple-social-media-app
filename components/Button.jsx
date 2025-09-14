import { Pressable, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React from 'react';
import { theme } from '../constants/theme';
import { hp } from '../helper/common';
import Loading from './Loading';
const Button = ({
  buttonStyle,
  textStyle,
  title = '',
  onPress = () => {},
  loading = false,
  hasShadow = true,
}) => {

    const shadowStyle = {
        shadowColor: theme.colors.dark,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    }
    if(loading){
        return (
            <View style={[styles.button, buttonStyle, {backgroundColor: 'white'}]}>
                <Loading />
            </View>
        )
    }
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        hasShadow && styles.shadow    ,
        buttonStyle,
      ]}
    >
    <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    height: hp(6.6),
    borderRadius: theme.radius.xl,
    alignItems: 'center',
    justifyContent: 'center',
    borderCurve: 'continuous',
  },
  text: {
    color: 'white',
    fontSize: hp(2.5),
    fontWeight: theme.fonts.bold,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
