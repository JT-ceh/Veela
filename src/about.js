import React, { useEffect,useState } from "react";
import {ActivityIndicator,Alert,KeyboardAvoidingView,TextInput,Platform,Button,Image,ListView,Modal,Picker,ScrollView,
        Slider,StyleSheet,Switch,Text,Keyboard,TouchableHighlight,TouchableOpacity,Vibration,View,} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function About({navigation}) {
  const options =() =>{}
  return (
    <View style={styles.lay}>
      <Text style={styles.title}>About</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
const styles = StyleSheet.create({
  lay: { flex: 1 },
  barIcons: { flex: 1, flexDirection: "row-reverse" },
  title: { fontWeight: "bold", fontSize: 18 },
  chat: { flex: 1 },
  mgview: {
    marginHorizontal: 1,justifyContent: 'center',flexDirection: 'column',
    flex: 1,backgroundColor: "#f44336",padding: 0,borderRadius: 999
  },
  footer: {
    alignItems: "center",
    justfyContent: "space-between",
    flexDirection: "row",
    marginBottom: 10,
  },
  sendMsg: {
    backgroundColor: "#f44336",
    borderRadius: 15,
    padding: 10,
    marginLeft: -5,
  },
  recMsg: {
    backgroundColor: "#f44336",
    borderRadius: 15,
    padding: 10,
    marginRight: -5,
}});
