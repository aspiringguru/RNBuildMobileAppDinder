import React, { Component } from 'react'

import {
  Drawer,
  View,
 } from 'native-base'

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
  *   NB : this.closeDrawer.bind(this)
  *   binds method to keyword this.
  *   openDrawerOffset 0.2 value chosen for appearance
  */
  render() {
    return (
      <Drawer
          ref={(ref) => this._drawer = ref}
          type="displace"
          content={<View style={{backgroundColor: "#000", height: 1000}}/>}
          onClose={this.closeDrawer.bind(this)}
          onOpen={this.openDrawer.bind(this)}
          openDrawerOffset={0.2}
          >
      </Drawer>

    )
  }

  }
