import { StyleSheet, Text, View } from "react-native";
import React from "react";

import MainModal from "../components/modal/MainModal";

const More = () => {
  return (
    <View style={styles.More}>
      <MainModal />
    </View>
  );
};

export default More;

const styles = StyleSheet.create({
  More: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});
