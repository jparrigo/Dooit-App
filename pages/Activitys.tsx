import { Image, Pressable, StyleSheet, Text, View } from "react-native"

export default function Activitys({ navigation } : any) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.logotitle}>
                    <Image source={require('../assets/mini-logo.png')}/>
                    <Text style={styles.headerTitleLogo}>Dooit</Text>
                </View>
                <Image source={require('../assets/search.png')}/>
            </View>
            <View style={styles.selectarea}>
                <Pressable style={styles.PressableEnable} onPress={() => navigation.navigate('Activitys')}>
                    <Text style={{color: '#fff',textAlign: 'center'}}>Todas as Listas</Text>
                </Pressable>
                <Pressable style={styles.PressableDisable} onPress={() => navigation.navigate('Activitys')}>
                    <Text style={{color: '#999999',textAlign: 'center'}}>Fixados</Text>
                </Pressable>
            </View>
            <Image
                style={{
                    marginTop: 113,
                    marginLeft: 10
                }} 
                source={require('../assets/create-image.png')}
            />
            <View style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 89
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginBottom: 28
                }}>Crie sua primeira To-Do List...</Text>
                
                <Pressable style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    width: 184,
                    paddingVertical: 14,
                    paddingHorizontal: 39,
                    backgroundColor: '#000000',
                    borderRadius: 10
                }} onPress={() => navigation.navigate('CreateActivity')}>
                    <Image source={require('../assets/plus.png')}/>
                    <Text style={{color: '#fff',textAlign: 'center'}}>Criar lista</Text>
                </Pressable>
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
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',    
    },
    logotitle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerTitleLogo: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    selectarea: {
        marginTop: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24
    },
    PressableEnable: {
        width: 184,
        paddingVertical: 14,
        paddingHorizontal: 39,
        backgroundColor: '#000000',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    PressableDisable: {
        width: 184,
        paddingVertical: 14,
        paddingHorizontal: 39,
        backgroundColor: '#E5E5E5',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    }
});