import {
  StyleSheet,
  Text,
  View,
  Modal,
  Alert,
  TextInput,
  TouchableOpacity
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInputText } from "../../redux/actions/actions";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const SubModal = ({ setMainModal }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  //   const localdata = useSelector(state => state);

  const handleDone = () => {
    dispatch(fetchUserInputText(text));
    setMainModal(true);
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setMainModal(true);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}> Adding data</Text>
            <SafeAreaView>
              <TextInput
                style={styles.txtInput}
                placeholder="Add your Text here"
                placeholderTextColor={"black"}
                value={text}
                multiline
                textAlignVertical="top"
                inp
                onChangeText={t => setText(t)}
              />
            </SafeAreaView>
            <TouchableOpacity
              style={{
                backgroundColor: "blue",
                width: 250,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                marginTop: 10
              }}
              onPress={handleDone}
            >
              <Text>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SubModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 22
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    marginHorizontal: 5,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF"
  },
  buttonClose: {
    backgroundColor: "#2196F3"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "black",
    position: "absolute",
    fontSize: 20
  },
  txtInput: {
    // backgroundColor: "white",
    width: 340,
    marginTop: 50,
    height: 200,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    padding: 15,
    color: "black"
  }
});
