import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import CheckBox from "../components/CheckBox";

export default function CreateActivity() {
  const [text, onChangeText] = useState('');
  const [activitys, setActiviys] = useState([1]);
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        placeholder="Title" 
        style={styles.titleActivity}
      />
      <View>
        {
          activitys.map((activity) => 
            <CheckBox key={activity} onSubmitted={() => setActiviys((state) => [...state,activitys.length+1])}/>
          )
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#fff',
},
  titleActivity: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 24,
    marginBottom: 18
  }
});