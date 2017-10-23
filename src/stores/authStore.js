import { action, observable, runInAction, useStrict } from 'mobx'
import { AuthSession } from 'expo'

import profileStore from './profileStore'

useStrict(true)

const FB_APP_ID = '903848686439681'

class AuthStore {
  @observable accessToken
  @observable signedIn = false
  @observable state = 'pending' // 'pending' / 'done' / 'error'

  @action
  login = async () => {
    this.state = 'pending'

    let redirectUrl = AuthSession.getRedirectUrl()
    let result = await AuthSession.startAsync({
      authUrl:
      `https://www.facebook.com/v2.8/dialog/oauth?response_type=token` +
      `&client_id=${FB_APP_ID}` +
      `&redirect_uri=${encodeURIComponent(redirectUrl)}`,
    })
    runInAction(() => {
      if (result.type !== 'success') {
        this.state = 'error'
      } else {
        this.accessToken = result.params.access_token
        this.signedIn = true
        this.state = 'done'
        profileStore.updateProfile(this.accessToken)
      }
    })
  }
}

export default new AuthStore()
