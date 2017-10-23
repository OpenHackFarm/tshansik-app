import { TabNavigator } from 'react-navigation'

import FarmScreen from '../screens/FarmScreen'
import SettingScreen from '../screens/SettingScreen'
import WarehouseScreen from '../screens/WarehouseScreen'

export default TabNavigator({
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