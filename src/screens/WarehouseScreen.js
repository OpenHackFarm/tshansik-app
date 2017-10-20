import React from 'react'
import { Button, StyleSheet, View } from 'react-native'

export default class WarehouseScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title='Tools'/>
        <Button title='Machines'/>
        <Button title='Seeds'/>
        <Button title='Pesticides'/>
        <Button title='Fertilizers'/>
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
