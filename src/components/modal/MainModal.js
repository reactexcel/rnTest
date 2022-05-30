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
  TouchableOpacity,
  SafeAreaView,TextInput
} from "react-native";
import axios from "axios";
import Ionicons from "react-native-vector-icons/Ionicons";

import Cards from "../card/Cards";
import {
  fetchUsers,
  fetchUsersFullfilled,
  fetchUsersRejected,fetchUserInputText
} from "../../redux/actions/actions";

const MainModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector(state => state?.users);
  const {data, inputText} = users
  const combineData = [...inputText,...data ]
  const [text, setText] = useState("");
  const [isAdd, setIsAdd] = useState(false)

  const handleDone = () => {
    text?dispatch(fetchUserInputText(text)):null
    setIsAdd(false);
    setText('')
  };

  const openSubModal = () => {
    setIsAdd(true);
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
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={[styles.centeredView]}>
          <View style={styles.modalView}>
          {!isAdd?<><Text style={styles.modalText}>My Modal</Text>
            <Text style={styles.addText} onPress={openSubModal}>
              Add
            </Text>
            <ScrollView showsVerticalScrollIndicator={false}>
              
              {combineData?.map(item => {
                return <Cards user={item.name}  />;
              })}
            </ScrollView></>
            
            :<><TouchableOpacity
              style={styles.chevronIcon}
              onPress={() => setIsAdd(false)}
            >
              <Ionicons name="chevron-back" size={25} color={"gray"} />
            </TouchableOpacity>
            <Text style={styles.modalText1}> Adding data </Text>
              <TextInput
                style={styles.txtInput}
                placeholder="Add your Text here....."
                placeholderTextColor={"black"}
                value={text}
                multiline
                textAlignVertical="top"
                inp
                onChangeText={t => setText(t)}
              />
            <TouchableOpacity
              style={{
                backgroundColor: "#1F51FF",
                width: 250,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                marginTop: 10
              }}
              onPress={handleDone}
            >
              <Text style={{color:'white'}}>Done</Text>
            </TouchableOpacity>
            </>
          }
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Open Modal</Text>
      </Pressable>
    </>
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
    top: 10,
    fontSize:15
  },
  modalText1: {
    marginBottom: 15,
    textAlign: "center",
    color: "black",
    position: "absolute",
    fontSize: 20
  },
  txtInput: {
    width: 340,
    marginTop: 50,
    height: 200,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    padding: 15,
    color: "black",
    backgroundColor:'white'
  },
  chevronIcon: {
    position: "absolute",
    left: 5,
    top: 2
  }
});

export default MainModal;
