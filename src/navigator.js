import { StackNavigator } from 'react-navigation'

import SignedInNavigator from './navigators/SignedInNavigator'
import SignedOutNavigator from './navigators/SignedOutNavigator'

export const createRootNavigator = (signedIn = false) => {
  return StackNavigator({
      SignedIn: {
        screen: SignedInNavigator,
      },
      SignedOut: {
        screen: SignedOutNavigator,
      },
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut",
    })
}
