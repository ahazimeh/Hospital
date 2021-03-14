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
  }
  requestDetails = (e) => {
    alert(e);
  };
  render() {
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
          <Text onPress={(e) => this.requestDetails("123")}>Request: O+</Text>
          <Text onPress={(e) => this.requestDetails("123")}>Request: O+</Text>
          <Text onPress={(e) => this.requestDetails("123")}>Request: O+</Text>
          <Text onPress={(e) => this.requestDetails("123")}>Request: O+</Text>
          <Text onPress={(e) => this.requestDetails("123")}>Request: O+</Text>
          <Text onPress={(e) => this.requestDetails("123")}>Request: O+</Text>
          <Text onPress={(e) => this.requestDetails("123")}>Request: O+</Text>
          <Text onPress={(e) => this.requestDetails("123")}>Request: O+</Text>

          <Text onPress={(e) => this.requestDetails("123")}>Request: O+</Text>
          <Text onPress={(e) => this.requestDetails("123")}>Request: O+</Text>
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
});

export default Page2;
