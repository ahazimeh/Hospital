import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
class Page2 extends Component {
  render() {
    var { data } = this.props.route.params;
    return <View>Page2</View>;
  }
}

export default Page2;
