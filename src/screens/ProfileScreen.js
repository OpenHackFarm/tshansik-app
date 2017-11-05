import React from 'react'
import {
  Button,
  Image,
  Text,
  View,
} from 'react-native'
import { inject, observer } from 'mobx-react'

@inject('authStore', 'profileStore')
@observer
export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Image
          source={{ uri: this.props.profileStore.profile.picture.data.url }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text style={{ fontSize: 20 }}>{this.props.profileStore.profile.name}</Text>
        <Text>ID: {this.props.profileStore.profile.id}</Text>
        <Button title='Logout' onPress={this.props.authStore.logout}/>
      </View>
    )
  }
}
