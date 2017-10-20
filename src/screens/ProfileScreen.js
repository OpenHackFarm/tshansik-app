import React from 'react'
import {
  Image,
  Text,
  View,
} from 'react-native'
import { connect } from 'react-redux'

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Image
          source={{ uri: this.props.profile.picture.data.url }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text style={{ fontSize: 20 }}>{this.props.profile.name}</Text>
        <Text>ID: {this.props.profile.id}</Text>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile,
  }
}

export default connect(
  mapStateToProps,
)(ProfileScreen)
