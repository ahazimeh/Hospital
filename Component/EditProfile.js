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
// import { Location } from "expo";
import * as Permissions from "expo-permissions";
// import { MapView, Permission } from "expo";
import * as Location from "expo-location";
import { PROVIDER_GOOGLE } from "expo";
import MapView, { Marker, Callout, CalloutSubview } from "react-native-maps";
var hobbies = [
  { label: "Male", value: 0 },
  { label: "Female", value: 1 },
  { label: "Other", value: 2 },
];
class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: -1,
      bloodType: 1,

      marker: null,
      map: true,
      first_name: "",
      last_name: "",
      phone: "",
      age: "",
      email: "",
      password: "",
      userEmail: "",
      userProfile: "",
    };
  }
  updateBloodType = (e) => {
    this.setState({ bloodType: e });
  };
  _getLocation = async () => {
    const { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      alert("a");
    } else {
      let location = await Location.getCurrentPositionAsync({});
      //   console.log(location.coords);
      this.setState({ marker: location.coords });
    }
  };
  componentDidMount() {
    this._getLocation();
    fetch("http://192.168.1.105:8000/api/requests/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.text())
      .then((res) => {
        // console.log(JSON.parse(res));
      });
    fetch("http://192.168.1.105:8000/api/user/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.text())
      .then((res) => {
        this.setState({ userEmail: JSON.parse(res) });
        console.log("hi");
        console.log(JSON.parse(res));
      });

    fetch("http://192.168.1.105:8000/api/profile/1", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.text())
      .then((res) => {
        this.setState({ userProfile: JSON.parse(res) });
        console.log("hi");
        console.log(JSON.parse(res));
        this.setState({ first_name: JSON.parse(res).first_name });
        this.setState({ last_name: JSON.parse(res).last_name });
        this.setState({ phone: JSON.parse(res).phone_nb });
        this.setState({ age: JSON.parse(res).age + "" });
        this.setState({ email: JSON.parse(res).users.email });
        this.setState({ bloodType: JSON.parse(res).blood_type.id });
        this.setState({ gender: JSON.parse(res).gender });
      });
  }
  onChangeText = (name, e) => {
    this.setState({ [name]: e });
  };
  submit() {
    // alert(this.state.first_name);
    // alert(this.state.last_name);
    // alert(this.state.phone);
    // alert(this.state.email);
    // alert(this.state.password);
    // alert(this.state.gender);
    // alert(this.state.bloodType);
    // alert(this.state.marker.latitude);
    // alert(this.state.marker.longitude);
    this.props.navigation.navigate("home", { screen: "home" });
  }
  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <Text style={{ marginLeft: "4%" }}>Personal Details</Text>
        <View style={styles.name}>
          <TextInput
            tintColor={"red"}
            style={styles.input}
            placeholder="  First Name"
            onChangeText={(text) => this.onChangeText("first_name", text)}
            defaultValue={this.state.first_name}
          />
          <TextInput
            tintColor={"red"}
            style={styles.input}
            placeholder="  Last Name"
            onChangeText={(text) => this.onChangeText("last_name", text)}
            defaultValue={this.state.last_name}
          />
        </View>
        <View style={styles.name}>
          <TextInput
            tintColor={"red"}
            style={styles.input1}
            placeholder="  Phone Number"
            onChangeText={(text) => this.onChangeText("phone", text)}
            defaultValue={this.state.phone}
          />
        </View>
        <View style={styles.name}>
          <TextInput
            tintColor={"red"}
            style={[styles.input1, styles.marginT]}
            placeholder="  Age"
            onChangeText={(text) => this.onChangeText("age", text)}
            defaultValue={this.state.age}
          />
        </View>
        <View style={styles.name}>
          <TextInput
            tintColor={"red"}
            style={[styles.input1, styles.marginT]}
            placeholder="  Email"
            onChangeText={(text) => this.onChangeText("email", text)}
            defaultValue={this.state.email}
          />
        </View>
        <View style={styles.name}>
          <TextInput
            secureTextEntry={true}
            tintColor={"red"}
            style={[styles.password, styles.marginT]}
            placeholder="  Password"
            onChangeText={(text) => this.onChangeText("password", text)}
          />
        </View>
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
        <Picker
          style={{ marginLeft: "2%" }}
          selectedValue={this.state.bloodType + ""}
          onValueChange={this.updateBloodType}
        >
          <Picker.Item label="O-" value="1" />
          <Picker.Item label="O+" value="2" />
          <Picker.Item label="A-" value="3" />
          <Picker.Item label="A+" value="4" />
          <Picker.Item label="B-" value="5" />
          <Picker.Item label="B+" value="6" />
          <Picker.Item label="AB-" value="7" />
          <Picker.Item label="AB+" value="8" />
        </Picker>

        {this.state.marker != null && this.state.map ? (
          <MapView
            onPress={(e) => this.setState({ marker: e.nativeEvent.coordinate })}
            style={{ flex: 1, height: 300, maxHeight: 450 }}
            initialRegion={{
              latitude: this.state.marker.latitude,
              longitude: this.state.marker.longitude,
              latitudeDelta: this.state.marker.latitude / 10000,
              longitudeDelta: this.state.marker.longitude / 10000,
            }}
          >
            <MapView.Marker
              coordinate={{
                latitude: this.state.marker.latitude,
                longitude: this.state.marker.longitude,
              }}
              title={"myTitle"}
              description={"myDescription"}
              pinColor={"blue"}
              onCalloutPress={() => alert("Clicked")}
            >
              <MapView.Callout>
                <View>
                  <Text>Click Me!</Text>
                </View>
              </MapView.Callout>
            </MapView.Marker>
          </MapView>
        ) : (
          <Text></Text>
        )}
        <Button title="Register" color="red" onPress={() => this.submit()} />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  marginT: {
    marginTop: "1%",
  },
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
  password: {
    backgroundColor: "#D3D3D3",
    width: "94%",
    height: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  name: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "1%",
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

export default EditProfile;
