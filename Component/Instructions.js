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
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCoffee,
  faHeart,
  faMapMarker,
  faPhone,
  faClock,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
class Instructions extends Component {
  render() {
    return (
      <View style={{ marginLeft: 10 }}>
        <View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View>
              <FontAwesomeIcon
                size={30}
                style={{ color: "rgb(50,205,50)", marginTop: 5 }}
                icon={faMapMarker}
              />
            </View>
            <View>
              <Text style={[styles.title]}>Location of Donation</Text>
            </View>
          </View>
          <View style={{ marginLeft: 30 }}>
            <Text>Locate the place you are going to donate</Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            marginTop: 20,
          }}
        />
        <View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View>
              <FontAwesomeIcon
                size={30}
                style={{ color: "rgb(50,205,50)", marginTop: 5 }}
                icon={faPhone}
              />
            </View>
            <View>
              <Text style={[styles.title]}>Call the Donor</Text>
            </View>
          </View>
          <View style={{ marginLeft: 30 }}>
            <Text>
              Call the requester and make sure to ask about these information
            </Text>
            <Text style={[styles.details]}>-Donation Location</Text>
            <Text style={[styles.details]}>
              -In which department of the hospital he is
            </Text>
            <Text style={[styles.details]}>-Best time to donate</Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            marginTop: 20,
          }}
        />
        <View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View>
              <FontAwesomeIcon
                size={30}
                style={{ color: "rgb(50,205,50)", marginTop: 5 }}
                icon={faClock}
              />
            </View>
            <View>
              <Text style={[styles.title]}>Set a Reminder for Donation</Text>
            </View>
          </View>
          <View style={{ marginLeft: 30 }}>
            <Text>
              Set a reminder to remind you with the appointement of donation
            </Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            marginTop: 20,
          }}
        />
        <View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View>
              <FontAwesomeIcon
                size={30}
                style={{ color: "rgb(50,205,50)", marginTop: 5 }}
                icon={faCheckCircle}
              />
            </View>
            <View>
              <Text style={[styles.title]}>Dont Forget these things</Text>
            </View>
          </View>
          <View style={{ marginLeft: 30 }}>
            <Text>
              Remember the location? here we go, don't forget to take any of
              these with you
            </Text>
            <Text style={[styles.details]}>-A copy of your National ID</Text>
            <Text style={[styles.details]}>
              -An extra bottle of water and a bag of juice
            </Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            marginTop: 20,
          }}
        />
        <View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View>
              <FontAwesomeIcon
                size={30}
                style={{ color: "rgb(50,205,50)", marginTop: 5 }}
                icon={faHeart}
              />
            </View>
            <View>
              <Text style={[styles.title]}>Donate Safely</Text>
            </View>
          </View>
          <View style={{ marginLeft: 30 }}>
            <Text>
              -After donation, drink more liquids, like water and juice
            </Text>
            <Text>-Try to eat a good meal</Text>
            <Text>-Don't stay directly in the sun</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  details: {
    color: "grey",
  },
  text: {
    marginLeft: 20,
  },
});

export default Instructions;
