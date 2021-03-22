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
class NearbyRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: [],
    };
  }
  componentDidMount() {
    const { data } = this.props.route.params;
    fetch("http://192.168.1.105:8000/api/requests/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.text())
      .then((res) => {
        this.setState({ requests: JSON.parse(res) });
        console.log("hi", JSON.parse(res));
      });
  }
  render() {
    const { data } = this.props.route.params;
    return (
      <ScrollView style={{ marginLeft: "4%" }}>
        <Text>{data.longitude}</Text>
        <Text>{data.latitude}</Text>
        {this.state.requests.map((data) => (
          <View>
            <View style={styles.req}>
              <View style={styles.type}>
                <Text style={{ color: "white", fontSize: 10 }}>Blood Type</Text>
                <Text style={{ color: "white", fontSize: 20 }}>O+</Text>
              </View>
              <View style={{ marginLeft: 5 }}>
                <Text style={{ fontWeight: "700", fontSize: 20 }}>
                  {data.first_name + " " + data.last_name}
                </Text>
                <Text>{data.hospital}</Text>
              </View>
            </View>
            <View
              style={{ marginLeft: 70, display: "flex", flexDirection: "row" }}
            >
              <Text> Share</Text>
              <Text
                style={{ marginLeft: 30 }}
                onPress={() =>
                  this.props.navigation.navigate("knowMore", {
                    data: data.id,
                  })
                }
              >
                Know More
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  req: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
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

export default NearbyRequests;
