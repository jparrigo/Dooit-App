import { StyleSheet, Text, View } from "react-native"

export default function Activitys() {
    return (
        <View style={styles.container}>
            <Text>Tela das Atividades</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
});