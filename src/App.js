import React from 'react'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'mobx-react'

import LoginScreen from './screens/LoginScreen'
import SignedInNavigator from './navigators/SignedInNavigator'

import authStore from './stores/authStore'
import profileStore from './stores/profileStore'

const stores = {
  authStore,
  profileStore,
}

export default class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <LoginNavigator/>
      </Provider>
    )
  }
}

const LoginNavigator = StackNavigator({
  Login: { screen: props => <LoginScreen {...props} routeTo='Main'/> },
  Main: { screen: SignedInNavigator },
})
