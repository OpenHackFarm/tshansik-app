import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { inject } from 'mobx-react'

@inject('authStore')
export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <Button title='Login with Facebook' onPress={this.props.authStore.login}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
