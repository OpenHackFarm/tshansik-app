import { action, observable, runInAction, useStrict } from 'mobx'
import { AuthSession } from 'expo'

import db from '../db'
import profileStore from './profileStore'

useStrict(true)

const FB_APP_ID = '903848686439681'
const DB_ACCESS_TOKEN_ID = 'access_token'

class AuthStore {
  @observable accessToken
  @observable signedIn = false
  @observable state = 'pending' // 'pending' / 'done' / 'error'

  saveToken = async (accessToken) => {
    const data = {
      _id: DB_ACCESS_TOKEN_ID,
      accessToken: accessToken,
    }
    try {
      await db.put(data)
    } catch (error) {
      console.log(error)
    }
  }

  getToken = async () => {
    try {
      const token = await db.get(DB_ACCESS_TOKEN_ID)
      return token.accessToken
    } catch (error) {
      console.log(error)
    }
    let redirectUrl = AuthSession.getRedirectUrl()
    let result = await AuthSession.startAsync({
      authUrl:
      `https://www.facebook.com/v2.8/dialog/oauth?response_type=token` +
      `&client_id=${FB_APP_ID}` +
      `&redirect_uri=${encodeURIComponent(redirectUrl)}`,
    })
    if (result.type !== 'success') {
      return null
    } else {
      return result.params.access_token
    }
  }

  removeToken = async () => {
    try {
      const doc = await db.get(DB_ACCESS_TOKEN_ID)
      await db.remove(doc)
    } catch (error) {
      console.log(error)
    }
  }

  @action
  login = async () => {
    this.state = 'pending'
    const token = await this.getToken()
    if (token === null) {
      return runInAction(() => {
        this.state = 'error'
      })
    }
    await this.saveToken(token)
    runInAction(() => {
      this.signedIn = true
      this.state = 'done'
    })
    profileStore.updateProfile(token)
  }

  @action
  logout = async () => {
    this.state = 'pending'
    await this.removeToken()
    runInAction(() => {
      this.signedIn = false
      this.state = 'done'
    })
  }
}

export default new AuthStore()
