import { useState } from 'react';
import { TouchableOpacity, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View , Keyboard} from 'react-native';
import Tasks from './components/Task';

export default function App() {
  
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleTasks = () => {
    Keyboard.dismiss()
    setTaskItems([...taskItems, task])
    setTask(null)
  };

  const completeTask = (index) =>{
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1)
    setTaskItems(itemsCopy)
  }
  return (
    <View style={styles.container}>

     <View style={styles.box}>
      <Text style={styles.font}>Today's Tasks</Text>
     </View>

     <View style={styles.taskContainer}>
      {
        taskItems.map((item ,index)=> {
        return (
            <TouchableOpacity onPress={()=> completeTask(index)}>
              <Tasks key={index} text={item}></Tasks>
            </TouchableOpacity>
        )
        })
      }
     </View>
     
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTextWrap}>
        <TextInput style={styles.input} 
          placeholder={'Enter the tasks'} 
          value={task} 
          onChangeText={text =>setTask(text)}/>
        <TouchableOpacity style={styles.addBtn} 
          onPress={()=> handleTasks()}>
            <Text style={styles.addBtnText}>+</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CDC1FF',
    alignItems:"center"
  },
  font:{
    color: "white",
    padding: 50,
    textAlign:"center",
    fontSize: 24
  },
  box:{
    backgroundColor:"#A594F9",
    width:"100%",
  },
  input:{
    width:300,
    height:50,
    backgroundColor:"white",
    borderRadius:40,
    paddingLeft:20
  },
  writeTextWrap:{
    position:"absolute",
    bottom: 60,
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-evenly"
  },
  addBtn:{
    backgroundColor:"white",
    width:50,
    height:50,
    borderRadius:50,
    alignItems:"center",
    padding:9
  },
  addBtnText:{
    color:"#A594F9",
    fontSize:24
  }
});
