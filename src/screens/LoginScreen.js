import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';

import { FacebookLoginButton } from '../components/FacebookLoginButton'

export class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <FacebookLoginButton
          title='Login with Facebook'
          loginCallback={this.loginCallback}
        />
      </View>
    )
  }

  loginCallback = (userInfo) => {
    console.log(userInfo)
    const { navigate } = this.props.navigation
    navigate(this.props.routeTo)
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
