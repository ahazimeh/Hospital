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
import { createMaterialTopTabNavigator } from "react-navigation";
import * as Location from "expo-location";
import MapView, { Marker, Callout, CalloutSubview } from "react-native-maps";

class Page2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marker: null,
      map: true,
      request: "",
    };
  }
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
    fetch("http://192.168.1.105:8000/api/request/1", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.text())
      .then((res) => {
        console.log(JSON.parse(res));
        this.setState({ request: JSON.parse(res) });
        console.log(this.state.request.blood_type.type);
      });
  }
  requestDetails = (e) => {
    alert(e);
  };
  render() {
    let marker = this.state.marker;
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        {this.state.marker != null && this.state.map ? (
          <MapView
            onPress={(e) => this.setState({ marker: e.nativeEvent.coordinate })}
            style={{ flex: 1, height: 300, maxHeight: 300 }}
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
        <ScrollView style={styles.requestList}>
          <Text
            style={{
              textAlign: "right",
              marginRight: 10,
            }}
            onPress={() =>
              this.props.navigation.navigate("nearby", {
                data: this.state.marker,
              })
            }
          >
            View More
          </Text>
          <View style={styles.req}>
            <View style={styles.type}>
              <Text style={{ color: "white", fontSize: 10 }}>Blood Type</Text>
              {this.state.request != "" ? (
                <Text style={{ color: "white", fontSize: 20 }}>
                  {this.state.request.blood_type.type}
                </Text>
              ) : (
                <Text></Text>
              )}
            </View>
            <View style={{ marginLeft: 5 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text style={{ fontWeight: "700", fontSize: 20 }}>
                    {this.state.request.first_name +
                      " " +
                      this.state.request.last_name}
                  </Text>
                </View>
              </View>
              <View>
                <Text>{this.state.request.hospital}</Text>
              </View>
            </View>
          </View>
          {/* <Text onPress={(e) => this.requestDetails("123")}>Request: O+</Text>
          <Text onPress={(e) => this.requestDetails("123")}>Request: O+</Text>
          <Text onPress={(e) => this.requestDetails("123")}>Request: O+</Text>
          <Text onPress={(e) => this.requestDetails("123")}>Request: O+</Text>
          <Text onPress={(e) => this.requestDetails("123")}>Request: O+</Text>
          <Text onPress={(e) => this.requestDetails("123")}>Request: O+</Text>
          <Text onPress={(e) => this.requestDetails("123")}>Request: O+</Text>
          <Text onPress={(e) => this.requestDetails("123")}>Request: O+</Text>

          <Text onPress={(e) => this.requestDetails("123")}>Request: O+</Text>
          <Text onPress={(e) => this.requestDetails("123")}>Request: O+</Text> */}
        </ScrollView>
        <View style={styles.request}>
          <Text
            style={styles.requestText}
            onPress={() => this.props.navigation.navigate("request")}
          >
            Request Blood
          </Text>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  request: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  requestText: {
    fontSize: 24,
  },
  requestList: {
    marginLeft: "4%",
    marginTop: 10,
    height: 100,
  },
  req: {
    flexDirection: "row",
    marginTop: 5,
    width: "100%",
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

export default Page2;
