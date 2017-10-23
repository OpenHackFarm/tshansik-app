import { action, observable, runInAction, useStrict } from 'mobx'

useStrict(true)

class ProfileStore {
  @observable profile

  @action
  updateProfile = async (accessToken) => {
    let userInfoResponse = await fetch(
      `https://graph.facebook.com/me?access_token=${accessToken}&fields=id,name,picture.type(large)`,
    )
    const profile = await userInfoResponse.json()
    runInAction(() => {
      this.profile = profile
    })
  }
}

export default new ProfileStore()
