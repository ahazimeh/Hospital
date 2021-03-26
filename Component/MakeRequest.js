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
      bloodTypes: [],
      units: 1,
      bloodType: 0,
      gender: -1,
      first_name: "",
      last_name: "",
      phone: "",
      age: "",
      myBloodType: "",
    };
  }
  componentDidMount() {
    fetch("http://192.168.1.105:8000/api/blood_types", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.text())
      .then((res) => {
        this.setState({ bloodTypes: JSON.parse(res) });
      });
    fetch("http://192.168.1.105:8000/api/profile/1", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.text())
      .then((res) => {
        this.setState({ myBloodType: JSON.parse(res).blood_type.type });
        // console.log(JSON.parse(res).blood_type.type);
      });
  }
  updateBloodType = (e) => {
    this.setState({ bloodType: e });
  };
  onChangeText = (name, e) => {
    alert(this.state.age);
    this.setState({ [name]: e });
  };
  submit() {
    alert("hi");
  }
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
      <ScrollView>
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
              onChangeText={(text) => this.onChangeText("first_name", text)}
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
              onChangeText={(text) => this.onChangeText("last_name", text)}
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
              keyboardType="number-pad"
              onChangeText={(text) => this.onChangeText("phone", text)}
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
              keyboardType="number-pad"
              onChangeText={(text) => this.onChangeText("age", text)}
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
            <Text style={{ marginTop: 20, fontWeight: "bold", fontSize: 19, textAlign: "center" }}>Gender</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 20,
            }}
          >
            {this.state.gender == 0 ? (
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
                  backgroundColor: "red"
                }}
              >
                <Text style={{ color: "white" }}>Male</Text>
              </View>
            ) : (
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
                <Text
                  style={{ color: "red" }}
                  onPress={(e) => this.setState({ gender: 0 })}
                >
                  Male
                </Text>
              </View>
            )}
            {this.state.gender == 1 ? (
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
                  backgroundColor: "red",
                }}
              >
                <Text style={{ color: "white" }}>Female</Text>
              </View>
            ) : (
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
                onPress={(e) => this.setState({ gender: 1 })}
              >
                <Text
                  style={{ color: "red" }}
                  onPress={(e) => this.setState({ gender: 1 })}
                >
                  Female
                </Text>
              </View>
            )}
          </View>
        </View>
        <View style={styles.card1}>
          <View style={[styles.title, styles.margin]}>
            <Text style={styles.titleText}>Blood Type</Text>
          </View>
          <Text style={{ marginLeft: 30, marginTop: 40 }}>Blood Request</Text>
          <Text style={{ marginLeft: 30, marginTop: 20 }}>
            Which Blood Group are you looking for?
          </Text>
          <Text style={{ marginLeft: 30, marginTop: 20 }}>Your Blood Group</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "4%",
            }}
          >
            <Text style={styles.box}>{this.state.myBloodType}</Text>
          </View>
          <Text style={{ marginLeft: 30, marginTop: 40 }}>Select from Others</Text>

          <View
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            {this.state.bloodTypes.length > 0 &&
              this.state.bloodTypes.map((data) =>
                this.state.bloodType == data.id ? (
                  <View>
                    <View style={[styles.bloodType, styles.red]}>
                      <Text
                        style={{ color: "white" }}
                        onPress={() => this.setState({ bloodType: data.id })}
                      >
                        {data.type}
                      </Text>
                    </View>
                  </View>
                ) : (
                  <View>
                    <View style={[styles.bloodType]}>
                      <Text
                        style={{ color: "red" }}
                        onPress={() => this.setState({ bloodType: data.id })}
                      >
                        {data.type}
                      </Text>
                    </View>
                  </View>
                )
              )}
          </View>
          <View style={styles.btn}>
            <Text style={styles.submit} onPress={(e) => this.submit()}>
              Submit
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  margin: {
    marginTop: 20,
  },
  red: {
    backgroundColor: "red",
  },
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
    borderRadius: 25,
    borderColor: "grey",
    paddingLeft: 35
  },
  btn: {
    backgroundColor: "red",
    width: 200,
    marginLeft: 50,
    marginTop: 20,
    height: 40,
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: 50,
  },
  submit: {
    fontSize: 24,
    textAlign: "center",
    color: "white"
  },
  card: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 5,
    margin: 3,
    color: "black",
    width: "90%",
    marginLeft: "5%",
    borderRadius: 5,
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
    height: 600,
    marginBottom:30
  },
  card1: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 5,
    margin: 3,
    color: "black",
    width: "90%",
    marginLeft: "5%",
    borderRadius: 5,
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
    height: 450,
    marginBottom:50
  },
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 19,
    fontWeight: "700",
    marginTop: 50
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
    marginTop: 40,
  },
  whiteText: {
    color: "white",
    fontSize: 18,
  },
  bloodType: {
    borderWidth: 1,
    padding: 12,
    borderColor: "red",
    borderRadius: 20,
    width: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: 7,
  },
});

export default MakeRequest;
