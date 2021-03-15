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
class KnowMore extends Component {
  render() {
    return (
      <View>
        <View style={styles.card}>
          <View style={styles.req}>
            <View style={styles.type}>
              <Text style={{ color: "white", fontSize: 10 }}>Blood Type</Text>
              <Text style={{ color: "white", fontSize: 20 }}>O+</Text>
            </View>
            <View style={{ marginLeft: 5 }}>
              <Text style={{ fontWeight: "700", fontSize: 20 }}>
                Michael Farah
              </Text>
              <Text>Hospital X</Text>
            </View>
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.cardDetails}>Published in </Text>
            <Text style={styles.cardDetails}>Age:</Text>
            <Text style={styles.cardDetails}>Gender:</Text>
            <Text style={styles.cardDetails}>Reason of requesting:</Text>
            {/* <View style={styles.donate}>
              <Text>Donate</Text>
            </View> */}
            <View style={styles.share}>
              <Text>Share</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
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
    height: 400,
  },
  cardBody: {
    marginLeft: 5,
  },
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
  cardDetails: {
    fontSize: 18,
    marginTop: 7,
  },
  donate: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "red",
    padding: 14,
    width: "60%",
    marginLeft: "20%",
    borderRadius: 20,
    marginTop: 60,
  },
  share: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 14,
    width: "60%",
    marginLeft: "20%",
    borderRadius: 20,
    borderWidth: 1,
    marginTop: 60,
    borderColor: "red",
  },
});
export default KnowMore;
