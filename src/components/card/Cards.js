import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Cards = ({ localText }) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "black" }}>
        {localText}
      </Text>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    height: 100,
    width: 270,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  }
});
