import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { theme } from '../constants/theme'
import { hp } from '../helper/common'

const Input = (props) => {
  return (
    <View style={[styles.container, props.containerStyles]}>
      {props.icon && props.icon}
      <TextInput
        style={{ flex: 1 }}
        placeholderTextColor={theme.colors.textLight}
        ref={props.inputRef}
        {...props}  
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 18,
    borderRadius: theme.radius.xxl,
    borderColor: theme.colors.text,
    borderCurve: 'continuous',
    height: hp(7.2),
    justifyContent: 'center',
    borderWidth: 0.4,
  },
})
