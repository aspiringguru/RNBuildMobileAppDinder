import React, { Component } from 'react'

import {
  Drawer,
  View,
 } from 'native-base'
/*
*
*
*/

import {
  Navigator,
 } from 'react-native-deprecated-custom-components'
/*
*   nb: deprecated package, Navigator now imported from
*   react-native-deprecated-custom-components
*   nbb: should look at new navigation toolset.
*/

/* added in ch 2-7 */
import SideMenu from './components/sideMenu'


/*
*   constructor args = properties of component
*   passes those properties up to super
*   initialise initial state
*   store key with empty object
*   theme key with null value
*
*   render method taks null args and returns null
*   "toggled: false" added so methods openDrawer & closeDrawer can set to t/f
*/
export default class AppContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggled: false,
      store: {},
      theme: null
    }
  }
  /*
  *   check if drawer is open or not
  *
  */
  toggleDrawer() {
    this.state.toggled ? this._drawer.close() : this._drawer.open()
  }
  openDrawer() {
    this.setState({toggled: true})
  }
  closeDrawer() {
    this.setState({toggled: false})
  }
  /*
  *   switch statement uses route to decide whith scene to render
  *   for now, have no scenes so return null
  */
  renderScene(route, navigator) {
    switch(route) {
      default: {
        return null
      }
    }
  }
  /*
  *   configureScene pushes scene in from right.
  *   https://facebook.github.io/react-native/releases/0.43/docs/navigator.html
  */
  configureScene(route, routeStack) {
    return Navigator.SceneConfigs.PushFromRight
  }

  /*
  *   NB : this.closeDrawer.bind(this)
  *   binds method to keyword this.
  *   openDrawerOffset 0.2 value chosen for appearance
  */
  /*
  * replace temp black screen with theme nominated.
    <View style={{backgroundColor: "#000", height: 1000}}/>
    nb: theme is still null at this point.
  */

  render() {
    return (
      <Drawer
          ref={(ref) => this._drawer = ref}
          type="displace"
          content={
            <SideMenu navigator={this._navigator} theme={this.state.theme}/>
          }

          onClose={this.closeDrawer.bind(this)}
          onOpen={this.openDrawer.bind(this)}
          openDrawerOffset={0.2}
          >
          <Navigator
            ref={(ref) => this._navigator = ref}
            configureScene={this.configureScene.bind(this)}
            renderScene={this.renderScene.bind(this)}
            />
      </Drawer>

    )
  }

}/* end export default class AppContainer extends Component */
