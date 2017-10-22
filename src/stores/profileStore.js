import { observable, action } from 'mobx'

class ProfileStore {
  @observable profile

  @action
  updateProfile(profile) {
    this.profile = profile
  }
}

export default new ProfileStore()
