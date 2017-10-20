import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'

import FarmScreen from './screens/FarmScreen'
import LoginScreen from './screens/LoginScreen'
import SettingScreen from './screens/SettingScreen'
import WarehouseScreen from './screens/WarehouseScreen'

export default class App extends React.Component {
  render() {
    return <LoginNavigator/>
  }
}

const MainNavigator = TabNavigator({
  Farm: {
    screen: FarmScreen,
    navigationOptions: {
      title: 'Farm',
    },
  },
  Warehouse: {
    screen: WarehouseScreen,
    navigationOptions: {
      title: 'Warehouse',
    },
  },
  Setting: {
    screen: SettingScreen,
    navigationOptions: {
      title: 'Setting',
    },
  },
})

const LoginNavigator = StackNavigator({
  Login: { screen: props => <LoginScreen {...props} routeTo='Main'/> },
  Main: { screen: MainNavigator },
})
