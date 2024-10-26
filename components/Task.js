import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Tasks = (props) =>{
    return (
        <View style={styles.taskBox}>
            <View style={styles.icon}></View>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
}
 const styles = StyleSheet.create({
   taskBox:{
    width: 300,
    height: 60,
    backgroundColor: "white",
    padding: 15,
    marginTop: 30,
    borderRadius: 10,
    flexDirection:"row",
    flexWrap: "wrap",
    alignItems:"center"
   },
   text:{
    fontSize: 20,
    marginLeft:10,
    maxWidth:"80%"
   },
   icon:{
    width: 30,
    height: 30,
    backgroundColor:"#A594F9",
    borderRadius:10
   } 
 })

 export default Tasks;