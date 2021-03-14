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
});

export default MakeRequest;
