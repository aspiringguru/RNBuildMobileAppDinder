import React, { Component } from 'react'

/*
*   constructor args = properties of component
*   passes those properties up to super
*   initialise initial state
*   store key with empty object
*   theme key with null value
*
*   render method taks null args and returns null
*
*/
export default class AppContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      store: {},
      theme: null
    }

  render() {
    return null
  }

  }
