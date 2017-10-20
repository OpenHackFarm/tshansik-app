import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { StackNavigator } from 'react-navigation'

import ProfileScreen from './ProfileScreen'

class SettingScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Button
          title='Profile'
          onPress={() =>{
            navigate('Profile')}}/>
        <Button title='Terms of Service'/>
        <Button title='Report a Problem'/>
      </View>
    )
  }
}

export default StackNavigator({
  Menu: { screen: SettingScreen },
  Profile: { screen: ProfileScreen },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
