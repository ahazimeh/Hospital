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
import { Picker } from "@react-native-community/picker";
class MakeRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      units: 1,
      bloodType: 0,
      gender: -1,
    };
  }
  updateBloodType = (e) => {
    this.setState({ bloodType: e });
  };
  render() {
    var unitNumbers = [];
    for (let i = 1; i < 10; i++) {
      if (this.state.units == i)
        unitNumbers.push(
          <Text
            onPress={(e) => this.setState({ units: i })}
            style={[styles.box, styles.box1]}
          >
            {i}
          </Text>
        );
      else
        unitNumbers.push(
          <Text onPress={(e) => this.setState({ units: i })} style={styles.box}>
            {i}
          </Text>
        );
    }
    return (
      <View>
        <View style={styles.card}>
          <View style={styles.title}>
            <Text style={styles.titleText}>Personal Information</Text>
          </View>
          <View style={styles.redBtn}>
            <Text style={styles.whiteText}>Use my profile data</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <TextInput
              tintColor={"red"}
              style={styles.inputB}
              placeholder="  First Name"
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <TextInput
              tintColor={"red"}
              style={styles.inputB}
              placeholder="  Last Name"
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <TextInput
              tintColor={"red"}
              style={styles.inputB}
              placeholder="  Phone"
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <TextInput
              tintColor={"red"}
              style={styles.inputB}
              placeholder="  Age"
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text>Gender</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 20,
            }}
          >
            <View
              style={{
                borderWidth: 1,
                padding: 12,
                borderColor: "red",
                borderRadius: 20,
                width: 100,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "red" }}>Male</Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                padding: 12,
                borderColor: "red",
                borderRadius: 20,
                width: 100,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "red" }}>Female</Text>
            </View>
          </View>
        </View>

        <Text style={{ marginLeft: "4%" }}>Blood Request</Text>
        <Text style={{ marginLeft: "4%" }}>
          Which Blood Group are you looking for?
        </Text>
        <Text style={{ marginLeft: "4%" }}>Your Blood Group</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "4%",
          }}
        >
          <Text style={styles.box}>O+</Text>
        </View>
        <Text style={{ marginLeft: "4%" }}>Select from Others</Text>
        <Picker
          style={{ marginLeft: "2%" }}
          selectedValue={this.state.bloodType}
          onValueChange={this.updateBloodType}
        >
          <Picker.Item label="O+" value="0" />
          <Picker.Item label="O-" value="1" />
          <Picker.Item label="A+" value="2" />
          <Picker.Item label="A-" value="3" />
          <Picker.Item label="AB+" value="4" />
          <Picker.Item label="AB-" value="5" />
          <Picker.Item label="B+" value="6" />
          <Picker.Item label="B+" value="7" />
        </Picker>

        <Text style={{ marginLeft: "4%" }}>
          How many Units of Blood you need?
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "4%",
          }}
        >
          {unitNumbers}
        </View>
        <View style={styles.name}>
          <TextInput
            tintColor={"red"}
            style={styles.input}
            placeholder="  First Name"
          />
          <TextInput
            tintColor={"red"}
            style={styles.input}
            placeholder="  Last Name"
          />
        </View>
        <View style={styles.name}>
          <TextInput
            tintColor={"red"}
            style={styles.input1}
            placeholder="  Phone Number"
          />
        </View>
        <View style={styles.btn}>
          <Text style={styles.submit}>Submit</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  box: {
    fontWeight: "bold",
    fontSize: 20,
    borderColor: "red",
    borderWidth: 1,
    padding: 5,
    margin: 3,
    color: "black",
  },
  box1: {
    color: "red",
  },
  name: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "1%",
  },
  input: {
    backgroundColor: "#D3D3D3",
    width: "46%",
    height: 40,
    margin: "1%",
  },
  input1: {
    backgroundColor: "#D3D3D3",
    width: "94%",
    height: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  inputB: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "grey",
  },
  btn: {
    backgroundColor: "red",
    width: "94%",
    marginLeft: "3%",
    marginTop: 20,
    height: 40,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: 50,
  },
  submit: {
    // marginTop: 20,
    fontSize: 24,
  },
  card: {
    fontWeight: "bold",
    fontSize: 20,
    // borderColor: "black",
    // borderWidth: 1,
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
    height: 500,
  },
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 19,
    fontWeight: "700",
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
    marginTop: 20,
  },
  whiteText: {
    color: "white",
    fontSize: 18,
  },
});

export default MakeRequest;
