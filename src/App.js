import React from 'react'
import { AppLoading } from 'expo'
import { Provider } from 'mobx-react'
import { observer } from 'mobx-react'

import authStore from './stores/authStore'
import profileStore from './stores/profileStore'
import { createRootNavigator } from './navigator'

const stores = {
  authStore,
  profileStore,
}

@observer
export default class App extends React.Component {
  state = {
    isReady: false,
  }

  init = async () => {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    })
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.init}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      )
    }
    const Layout = createRootNavigator(authStore.signedIn)
    return (
      <Provider {...stores}>
        <Layout/>
      </Provider>
    )
  }
}
