import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Cards = ({ user }) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "black" }}>
        {user}
      </Text>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    margin: 10,
    height: 120,
    width: 280,
    borderColor: "black",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: "white"
  }
});
