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
import { Input } from "react-native-elements";
import { Picker } from "@react-native-community/picker";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import { MapView, Permission } from "expo";
var hobbies = [
  { label: "Male", value: 0 },
  { label: "Female", value: 1 },
  { label: "Other", value: 2 },
];
class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state = { gender: -1, bloodType: 0 };
  }
  updateBloodType = (e) => {
    this.setState({ bloodType: e });
  };
  render() {
    // TextInput.defaultProps.selectionColor = "red";
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        {/* <TouchableOpacity
          title="EmployeeList "
          onPress={() =>
            this.props.navigation.navigate("page2", {
              data: "a",
            })
          }
        >
          <Text>Employee List </Text>
        </TouchableOpacity> */}
        <Text>Personal Details</Text>
        {/* <TextInput editable maxLength={40} /> */}
        <View style={styles.name}>
          <TextInput
            // selectionColor={"red"}
            tintColor={"red"}
            style={styles.input}
            placeholder="  First Name"
          />
          <TextInput
            // selectionColor={"red"}
            tintColor={"red"}
            style={styles.input}
            placeholder="  Last Name"
          />
        </View>
        {/* <RadioForm
          buttonInnerColor={"#e74c3c"}
          style={styles.radio}
          radio_props={hobbies}
          initial={-1}
          onPress={(value) => {}}
          formHorizontal={true}
        /> */}
        <RadioForm
          style={styles.form}
          formHorizontal={true}
          animation={true}
          initial={1}
        >
          <Text style={styles.label}>Gender:</Text>
          <RadioButton labelHorizontal={true} key={0}>
            <RadioButtonInput
              isSelected={this.state.gender === 0}
              obj={hobbies[0]}
              onPress={(value) => {
                this.setState({ gender: value });
              }}
              index={0}
              borderWidth={3}
              buttonInnerColor={"red"}
              buttonOuterColor={"red"}
              //   buttonSize={40}
              //   buttonOuterSize={80}
              buttonWrapStyle={{ marginLeft: 10 }}
            >
              <RadioButtonLabel
                obj={hobbies[0]}
                index={0}
                labelHorizontal={true}
                onPress={(value) => {}}
                labelStyle={{ fontSize: 20, color: "green" }}
              />
            </RadioButtonInput>
            <Text style={styles.label}>Male</Text>
          </RadioButton>
          <RadioButton labelHorizontal={true} key={1}>
            <RadioButtonInput
              obj={hobbies[1]}
              isSelected={this.state.gender === 1}
              onPress={(value) => {
                this.setState({ gender: value });
              }}
              index={1}
              borderWidth={3}
              buttonInnerColor={"red"}
              buttonOuterColor={"red"}
              //   buttonSize={40}
              //   buttonOuterSize={80}
              buttonWrapStyle={{ marginLeft: 10 }}
            >
              <RadioButtonLabel
                obj={hobbies[1]}
                index={1}
                labelHorizontal={true}
                onPress={(value) => {}}
                labelStyle={{ fontSize: 20, color: "green" }}
              />
            </RadioButtonInput>
            <Text style={styles.label}>Female</Text>
          </RadioButton>
        </RadioForm>
        {/* <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}> */}
        <Picker
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
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    textAlign: "center",
  },
  input: {
    backgroundColor: "#D3D3D3",
    width: "46%",
    height: 40,
    margin: 2,
  },
  name: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  radio: {
    // display: "flex",
    // flexDirection: "row",
  },
  label: {
    fontSize: 18,
  },
  form: {
    marginLeft: "4%",
    marginTop: 10,
  },
});

export default Page1;
