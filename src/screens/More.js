import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ModalView from "../components/modal/OpenModal";
import SubModal from "../components/modal/SubModal";

const More = () => {
  const [mainModal, setMainModal] = useState(true);
  return (
    <View style={styles.More}>
      {mainModal
        ? <ModalView setMainModal={setMainModal} />
        : <SubModal setMainModal={setMainModal} />}
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
  },
  btnContainer: {
    backgroundColor: "blue",
    height: 50,
    width: 200,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  btnTxt: {
    color: "white"
  }
});
