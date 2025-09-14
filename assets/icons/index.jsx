import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './Home'
import { theme } from '../../constants/theme'
const icons = {
    home: Home,
}
const Icons = ({name,...props}) => {
    const IconComponent = icons[name];
  return (
    <IconComponent 
    hieght={props.size || 24}
    width={props.size || 24}
    color={props.color || theme.colors.textLight}
    strokeWidth={props.strokeWidth || 1.9}
    {...props}
    />
  )
}

export default Icons

const styles = StyleSheet.create({})