/*
*   added in ch 2-8
*
*/

import React, { Component } from 'react'
import { Image } from 'react-native'
import { View } from 'native-base'


export default class SplashScene extends Component {
  constructor(props) {
    super(props)
  }


  /*
  *
  *   () =>    = anonymous function
  *   this.props.navigator.replace   = prevents backwards navigation
  *   title: "Login"    nb: login screen created in ch 2-9
  *   Login page called with key passPros and value of this.props
  */
  componentDidMount() {
    const { stores } = this.props
    setTimeout(() => {
      this.props.navigator.replace({title: "Login", passProps: this.props})
    }, stores.settings.SplashTime)
  }

  /*
  *
  *   flex:1   = uses whole screen
  */
  render() {
    const { settings } = this.props.stores
    return (
      <View style={{flex:1}}>
        <Image style={{flex:1, width:null, height:null}} source={settings.SplashImg}/>
      </View>
    )
  }
}
