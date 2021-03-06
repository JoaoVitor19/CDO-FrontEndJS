import React, { useState } from 'react';
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, Image, Text, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Linking } from 'react-native';
import Botao from '../../components/Botao/Button'
import { LinearGradient } from 'expo-linear-gradient'
import Instance from "./config"

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        paddingTop: 120
    },

    input_texto: {
        width: 270,
        height: 50,
        borderRadius: 20,
        textAlign: 'center',
        marginBottom: 10,
        backgroundColor: 'rgba(52, 52, 52, 0.3)',
        fontWeight: 'bold',
        color: 'white'

    },

    texto_conexao: {
        alignItems: 'center',
        marginTop: 60,
        paddingRight: 60
    },

    contate: {
        alignItems: 'center',
        marginTop: 2,
        paddingRight: 90,
    },

    contate_texto: {
        color: 'red',
    },

    imgem: {
        width: 150,
        height: 150,
        marginBottom: 50

    },
    background: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },

    problemas_texto: {
        color: 'white',
        fontWeight: 'bold',
    }
})

const DimissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



    const onSubmit = async () => {
        const form = {
            username: email,
            password: password
        }



        try {
            const { data, status } = await Instance.post('/auth', JSON.stringify(form))
            navigation.navigate("Veiculos")

        } catch (err) {
            alert("Email ou senha incorretos!")
            console.log(`ERROR: ${err}`);
        }





    }

    return (

        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? "padding" : "height"}
        >
            <DimissKeyboard>
                <LinearGradient
                    colors={['#70F6C6', '#227878', '#227878']}
                    style={styles.background}
                >
                    <View>
                        <View style={styles.container}>
                            <View>
                                <Image style={styles.imgem} source={require('../../assets/CasaDoOleoIcon.png')} />
                            </View>

                            <View >
                                <TextInput onChangeText={setEmail} placeholder="E-mail" data-testid='email' placeholderTextColor="#ffff" style={styles.input_texto} />
                            </View>

                            <View >
                                <TextInput onChangeText={setPassword} secureTextEntry={true} data-testid='senha' placeholderTextColor="#ffff" placeholder="Senha" style={styles.input_texto} />
                            </View>

                            <Botao labelButton={"Login"} onPress={onSubmit} />
                        </View>
                        <View style={styles.texto_conexao}>
                            <Text style={styles.problemas_texto} >
                                Problemas para se conectar?
                            </Text>
                        </View>
                        <TouchableOpacity
                        onPress={() => Linking.openURL('https://google.com')}>
                        <View style={styles.contate}>
                            <Text style={styles.contate_texto}>
                                Contate a casa do Oleo
                            </Text>
                        </View>
                        </TouchableOpacity>
                    </View>

                </LinearGradient>
            </DimissKeyboard>
        </KeyboardAvoidingView>
    )

}

export default Login