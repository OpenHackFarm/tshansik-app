import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation'

import { FacebookLoginButton } from '../components/FacebookLoginButton'

export class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <FacebookLoginButton
          title='Login with Facebook'
          callback={this.reset}
        />
      </View>
    )
  }

  reset = () => {
    return this.props
      .navigation
      .dispatch(NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: this.props.routeTo }),
        ],
      }))
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
