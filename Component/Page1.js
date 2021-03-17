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
class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: -1,
      bloodType: 0,

      marker: null,
      map: true,
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
      console.log(location.coords);
      this.setState({ marker: location.coords });
    }
  };
  componentDidMount() {
    this._getLocation();
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
        <View style={styles.name}>
          <TextInput
            tintColor={"red"}
            style={styles.input1}
            placeholder="  Email"
          />
        </View>
        <View style={styles.name}>
          <TextInput
            secureTextEntry={true}
            tintColor={"red"}
            style={styles.password}
            placeholder="  Password"
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

        {this.state.marker != null && this.state.map ? (
          <MapView
            onPress={(e) => this.setState({ marker: e.nativeEvent.coordinate })}
            style={{ flex: 1, height: 450, maxHeight: 450 }}
            initialRegion={{
              latitude: this.state.marker.latitude,
              longitude: this.state.marker.longitude,
              latitudeDelta: this.state.marker.latitude,
              longitudeDelta: this.state.marker.longitude,
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
        <Button
          title="Register"
          color="red"
          onPress={() =>
            this.props.navigation.navigate("home", { screen: "home" })
          }
        />
      </ScrollView>
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

export default Page1;
