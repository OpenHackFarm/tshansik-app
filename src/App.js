import React from 'react'
import { TabNavigator } from 'react-navigation'

import { FarmScreen } from './screens/FarmScreen'
import { SettingScreen } from './screens/SettingScreen'
import { WarehouseScreen } from './screens/WarehouseScreen'

export default class App extends React.Component {
  render() {
    return <MainNavigator/>
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
