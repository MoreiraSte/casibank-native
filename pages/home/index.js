import React from 'react';
import { View, Text, TouchableOpacity,ImageBackground } from 'react-native';
import styles from './style'

const image = { uri: "https://reactjs.org/logo-og.png" };


export default function Home({navigation}){
    return(
        
        <View style={styles.container}>
            <View style={styles.containerTxt}>
            <Text style={styles.texto1}>
                CasiBank
            </Text>
            </View>
            
            <View style={styles.btn}>
                <TouchableOpacity 
                    title='Sigin'
                    onPress={()=> navigation.navigate('Login')}
                    style={styles.botao}
                >
                    <Text style={styles.txtButton}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}