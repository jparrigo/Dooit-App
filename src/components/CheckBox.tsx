import { useState } from "react";
import Checkbox from 'expo-checkbox';
import { View, TextInput } from "react-native";

interface PropsCheckbox {
  onSubmitted: Function
}

export default function CheckBox(props : PropsCheckbox) {
  const [isChecked, setChecked] = useState(false);
  const [text, onChangeText] = useState('');
  return (
    <View style={{
      alignItems: 'center',
      flexDirection: 'row',
      marginLeft: 30
    }}>
      <Checkbox 
        style={{margin: 8, borderColor: '#000000', borderRadius: 4}}
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? '#090909' : undefined}
      />
      <TextInput 
        onChangeText={onChangeText}
        value={text}
        placeholder="To-do"
        style={isChecked ? {textDecorationLine: 'line-through'} : undefined}
        onSubmitEditing={() => props.onSubmitted()}
      />
    </View>
  )
}