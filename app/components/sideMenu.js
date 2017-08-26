import React, { Component } from 'react'
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  View,
  Button
} from 'native-base'

export default class SideMenu extends Component {
  constructor(props) {
    super(props)
  }

  /*
  *   this.props.navigator.replace("Match")
  *   where "Match" is title of the scene to render.
  *   this.props.navigator.replace("History") : use replace instead of pushes
  *   prevents user from navigating backwards with arrow
  *
  *   theme={this.props.theme} : sets theme to theme passed in with props.
  *   <Header/> = blank header, will populate later
  *   item.onPress.bind(this) = bind item.onPress to this
  */
  render() {
    let list = [{
      title: "Match",
      onPress: () => {
        this.props.navigator.replace("Match")
      }
    }, {
      title: "History",
      onPress: () => {
        this.props.navigator.replace("History")
      }
    }]
    return (
      <Container theme={this.props.theme}>
        <Header/>
        <View>
          <List dataArray={list} renderRow={(item) =>
            <ListItem button onPress={item.onPress.bind(this)}>
              <Text> {item.title} </Text>
            </ListItem>
          }/>
        </View>
      </Container>
    )/* end return */
  }/* end render */
}/* end export default class SideMenu extends Component */
