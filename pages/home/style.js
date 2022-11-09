import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#cc0',
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    containerTxt:{
       backgroundColor:'white',
       width:'70%',
       borderRadius:15
    },
    texto1:{
        fontSize:50,
        textAlign:'center',
        color:'#CC0000',
        fontStyle:'normal'
    },
    botao: {
        width: '60%',
        height: 50,
        backgroundColor: '#555',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    btn: {
        width: '100%',
        height: 60,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtButton: {
        fontFamily: 'Verdana',
        fontSize: 30,
        color: '#DDD',
    },
})

export default styles