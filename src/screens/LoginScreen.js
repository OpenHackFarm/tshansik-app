import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';

export class LoginScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <Button
          onPress={() => navigate(this.props.routeTo)}
          title='Login with Facebook'
        />
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
