import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Alert,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  View,
  Flatlist
} from "react-native";
import axios from "axios";

import Cards from "../card/Cards";
import {
  fetchUsers,
  fetchUsersFullfilled,
  fetchUsersRejected
} from "../../redux/actions/actions";

const MainModal = ({ setMainModal }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector(state => state?.users?.data);
  const inputText =  useSelector(state => state?.users?.inputText)

  const openSubModal = () => {
    setMainModal(false);
  };
  useEffect(() => {
    dispatch(fetchUsers());
    axios
      .get("https://gorest.co.in/public/v2/users")
      .then(response => {
        dispatch(fetchUsersFullfilled(response.data));
      })
      .catch(error => {
        dispatch(fetchUsersRejected(error));
      });
  }, []);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={[styles.centeredView]}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>My Modal</Text>
            <Text style={styles.addText} onPress={openSubModal}>
              Add
            </Text>
            <ScrollView>
              {data?.map(item => {
                console.log(item);
                return <Cards id={item.id} inputText={inputText} />;
              })}
            </ScrollView>
            {/* <Flatlist
            data={data}
            renderItem={(item) => console.log(item,"Flatlist") }
            /> */}
            {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable> */}
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Open Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 22
  },
  modalView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginHorizontal: 10,
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
    elevation: 2,
    width: 200
  },
  buttonOpen: {
    backgroundColor: "#1F51FF"
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
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    top: 5
  },
  addText: {
    color: "#1F51FF",
    position: "absolute",
    right: 20,
    top: 10
  }
});

export default MainModal;
