import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CheckBox from '@react-native-community/checkbox';

export default function CreateActivity() {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.titleActivity}>Title</Text>
      <View>
        {/* <CheckBox /> Não consegui adicionar um checkbox */}
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
    marginLeft: 24
  }
});