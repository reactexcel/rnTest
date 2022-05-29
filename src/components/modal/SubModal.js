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
import { fetchLocalData } from "../../redux/actions/actions";

const SubModal = ({ setMainModal }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  //   const localdata = useSelector(state => state);

  const handleDone = () => {
    dispatch(fetchLocalData(text));
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
            <TextInput
              style={styles.txtInput}
              placeholder="Add your Text here"
              value={text}
              onChangeText={t => setText(t)}
            />
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
    flex: 1,
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
    width: 340,
    marginTop: 50,
    height: 300,
    borderRadius: 8,
    elevation: 3
  }
});
