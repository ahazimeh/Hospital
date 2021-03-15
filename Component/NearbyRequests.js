import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TextInput,
  ScrollView,
  AppRegistry,
  TouchableOpacity,
} from "react-native";
class NearbyRequests extends Component {
  render() {
    return (
      <ScrollView style={{ marginLeft: "4%" }}>
        <View style={styles.req}>
          <View style={styles.type}>
            <Text style={{ color: "white", fontSize: 10 }}>Blood Type</Text>
            <Text style={{ color: "white", fontSize: 20 }}>O+</Text>
          </View>
          <View style={{ marginLeft: 5 }}>
            <Text style={{ fontWeight: "700", fontSize: 20 }}>
              Michael Farah
            </Text>
            <Text>Hospital X</Text>
          </View>
        </View>
        <View style={{ marginLeft: 70, display: "flex", flexDirection: "row" }}>
          <Text> Share</Text>
          <Text style={{ marginLeft: 30 }}>Know More</Text>
        </View>
        <View style={styles.req}>
          <View style={styles.type}>
            <Text style={{ color: "white", fontSize: 10 }}>Blood Type</Text>
            <Text style={{ color: "white", fontSize: 20 }}>O+</Text>
          </View>
          <View style={{ marginLeft: 5 }}>
            <Text style={{ fontWeight: "700", fontSize: 20 }}>
              Michael Farah
            </Text>
            <Text>Hospital X</Text>
          </View>
        </View>
        <View style={{ marginLeft: 70, display: "flex", flexDirection: "row" }}>
          <Text> Share</Text>
          <Text style={{ marginLeft: 30 }}>Know More</Text>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  req: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
  },
  type: {
    fontWeight: "bold",
    fontSize: 20,
    borderColor: "red",
    borderWidth: 1,
    backgroundColor: "red",
    borderRadius: 5,
    paddingTop: 2,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    margin: 3,
    color: "black",
    margin: "auto",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default NearbyRequests;
