import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { theme } from '../constants/theme'
import Icons from '../assets/icons'
const Login = () => {
  return (
    <ScreenWrapper>
      <Text>Login</Text>
      <Icons name="home" color="red"/>
    </ScreenWrapper>
  )
}

export default Login

const styles = StyleSheet.create({})