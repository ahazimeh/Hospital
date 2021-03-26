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
class Login extends Component {
  render() {
    return (
      <View>
        <View style={styles.card}>
          <View style={styles.title}>
            <Text style={styles.titleText}>Login</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              marginTop: 50,
            }}
          >
            <View
              style={{
                width: "80%",
                marginLeft: "10%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                height: 40,
                borderRadius: 10,
                marginTop: 20,
              }}
            >
              <TextInput
                tintColor={"red"}
                style={styles.inputB}
                placeholder="  Email"
                autoCapitalize="none"
                type="email"
                keyboardType="email-address"
              />
            </View>
            <View
              style={{
                width: "80%",
                marginLeft: "10%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                height: 40,
                borderRadius: 10,
                marginTop: 20,
              }}
            >
              <TextInput
                tintColor={"red"}
                style={styles.inputB}
                placeholder="  Password"
                secureTextEntry={true}
              />

            </View>
            <TouchableOpacity style={styles.redBtn}>
              <Text style={styles.whiteText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 5,
    margin: 3,
    color: "black",
    width: "90%",
    marginLeft: "5%",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
    height: 600,
  },
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "700",
  },
  inputB: {
    width: "100%",
    // marginLeft: "10%",
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "grey",
    paddingLeft: 30
  },
  redBtn: {
    backgroundColor: "red",
    width: "80%",
    marginLeft: "10%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderRadius: 10,
    marginTop: 100,

  },
  whiteText: {
    color: "white",
    fontSize: 18,
  },
});
export default Login;
