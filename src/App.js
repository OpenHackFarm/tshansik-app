import React from 'react'
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
  render() {
    const Layout = createRootNavigator(authStore.signedIn)
    return (
      <Provider {...stores}>
        <Layout/>
      </Provider>
    )
  }
}
