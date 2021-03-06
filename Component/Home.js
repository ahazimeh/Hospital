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
class Home extends Component {


  render() {
    return (
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 40,
          }}
        >
          <View style={styles.redBtn}>
            <TouchableOpacity style={{ color: "white" }}><Text>I Need Blood!</Text></TouchableOpacity>
          </View>
          <View style={styles.blueBtn}>
            <TouchableOpacity style={{ color: "white" }}><Text style={{ color: "white" }}>Health Center</Text></TouchableOpacity>
          </View>
        </View>
        <View style={{ marginLeft: 30 }}>
          <Text style={{ textAlign:"center",fontWeight:"bold",fontSize:20,marginTop:40 }}>For a healthy day</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <View style={styles.card}>
            <Text style={{ marginTop: 20 }}>Heart Icon</Text>
            <Text style={{ fontSize: 22, marginTop: 20,width:250,textAlign:"center" }}>
              You are on a mission to save lives
            </Text>
            <View>
              <View style={styles.greenBtn}>
                <Text
                  onPress={() =>
                    this.props.navigation.navigate("page2", {
                      screen: "page2",
                    })
                  }
                  style={{ color: "white" }}
                >
                  Show me mission details
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  redBtn: {
    backgroundColor: "red",
    width: 130,
    paddingTop: 13,
    paddingBottom: 13,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  blueBtn: {
    backgroundColor: "blue",
    width: 130,
    paddingTop: 13,
    paddingBottom: 13,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  greenBtn: {
    backgroundColor: "green",
    width: 250,
    paddingTop: 13,
    paddingBottom: 13,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 100,
  },
  card: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 5,
    marginTop: 40,
    color: "black",
    width: "90%",
    borderRadius: 20,
    borderWidth: 1,
    height: 400,
    width: "84%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default Home;
