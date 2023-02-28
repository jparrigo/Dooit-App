import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
interface NavigationType {
    navigation: {
        navigate: Function
    }
}
export default function Welcome({ navigation } : NavigationType) {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')}/>
            <Text style={styles.title}>Dooit</Text>
            <Text style={styles.text}>Escreva o que você</Text>
            <Text style={styles.text}>precisa fazer. Todos os dias.</Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Activitys')}>
                <Text style={styles.textButton}>Continuar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: '#fff',
      fontSize: 39,
      fontWeight: 'bold',
      marginTop: 42,
      marginBottom: 28
    },
    text: {
      color: '#C4C4C4',
      fontSize: 18
    },
    textButton: {
      color: '#000000',
      fontSize: 16,
      fontWeight: 'bold'
    },
    button: {
      position: 'absolute',
      bottom: 68,
      paddingHorizontal: 64,
      paddingVertical: 16,
      backgroundColor: '#FFFFFF',
      borderRadius: 100
    }
});