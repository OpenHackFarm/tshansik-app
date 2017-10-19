import React from 'react'
import { Button, StyleSheet, View } from 'react-native'

export class SettingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title='Profile'/>
        <Button title='Terms of Service'/>
        <Button title='Report a Problem'/>
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
