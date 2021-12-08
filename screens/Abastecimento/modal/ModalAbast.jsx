import React, { useState } from 'react'
import { View, Text, Modal, StyleSheet, Button, TextInput } from 'react-native'
import { FAB } from 'react-native-paper'
import { Formik } from 'formik'

const styles = StyleSheet.create({
  background: {
    boxShadow: '3px 3px 3px #B2B4BD',
    backgroundColor: '#fff',
    width: 300,
    height: 550,
    padding: 10,
    borderRadius: 5,
    margin: 35,
    borderColor: '#de4126',
    borderLeftWidth: 5
  },
  fundoData: {
    fontSize: 18,
    width: '70%'
  },
  fundoHora: {
    fontSize: 18,
    width: '70%'
  },
  button: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row-reverse',
    padding: 10
  },
  buttonSalvar: {
    backgroundColor: '#b8b8b8',
    color: 'black'
  },
  textTitulo: {
    fontSize: 17,
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center'
  },

  inputDataHora: {
    flexDirection: 'row'
  },
  inputDH: {
    width: 140,
    justifyContent: 'space-between'
  },
  inputH:{
    left:25,
    width: 140,
    justifyContent: 'space-between'
  },
  backgroundFundo: {
    padding: 20
  },
  info: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    padding: 10
  },
  inputHora: {
    width: '50%',
    fontSize: 20,
    backgroundColor: '#F3F1F1',
    borderRadius: 3,
    
  },
  inputData: {
    width: '70%',
    fontSize: 20,
    backgroundColor: '#F3F1F1',
    borderRadius: 3
  },
  fab: {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    alignItems: 'center',
    width: 50,
    backgroundColor: '#FC5656',
    height: 50,
    borderRadius: 100,
    margin: 0,
    right: 0,
    bottom: 5
  }
})

export default function ModalAbastecimento() {
  const [visivel, setVisivel] = useState(false)
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={visivel}>
        <Formik
          initialValues={{
            data: '',
            hora: '',
            tipoDeCombusitvel: '',
            nomeDoPosto: '',
            tipoDeDeslocamento: '',
            anotação: ''
          }}
          onSubmit={values => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.background}>
              <Text style={styles.textTitulo}>
                Cadastrar Novo Abastecimento
              </Text>
              <View style={styles.backgroundFundo}>
                <View style={styles.inputDataHora}>
                  <View style={styles.inputDH}>
                    <Text style={styles.fundoData}>Data</Text>
                    <TextInput
                      style={styles.inputData}
                      onChangeText={handleChange('data')}
                      onBlur={handleBlur('data')}
                      value={values.data}
                    />
                  </View>
                  <View style={styles.inputH}>
                    <Text style={styles.fundoHora}>Hora</Text>
                    <TextInput
                      onChangeText={handleChange('hora')}
                      onBlur={handleBlur('hora')}
                      value={values.hora}
                      style={styles.inputHora}
                    />
                  </View>
                </View>
                <Text style={{ fontSize: 20 }}>Tipo de Combustível</Text>
                <TextInput
                  onChangeText={handleChange('tipoDeCombusitvel')}
                  onBlur={handleBlur('tipoDeCombusitvel')}
                  value={values.tipoDeCombusitvel}
                  style={{
                    fontSize: 20,
                    backgroundColor: '#F3F1F1',
                    borderRadius: 3
                  }}
                />
                <View style={styles.info}>
                  <TextInput
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    style={{
                      fontSize: 20,
                      width: '30%',
                      backgroundColor: '#F3F1F1',
                      borderRadius: 3
                    }}
                  />
                  <TextInput
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    style={{
                      fontSize: 20,
                      width: '30%',
                      backgroundColor: '#F3F1F1',
                      borderRadius: 3
                    }}
                  />
                </View>
                <Text style={{ fontSize: 20 }}>Nome do Posto</Text>
                <TextInput
                  onChangeText={handleChange('nomeDoPosto')}
                  onBlur={handleBlur('nomeDoPosto')}
                  value={values.nomeDoPosto}
                  style={{
                    fontSize: 20,
                    backgroundColor: '#F3F1F1',
                    borderRadius: 3
                  }}
                />
                <Text style={{ fontSize: 20 }}>Tipo de Deslocamento</Text>

                <TextInput
                  onChangeText={handleChange('tipoDeDeslocamento')}
                  onBlur={handleBlur('tipoDeDeslocamento')}
                  value={values.tipoDeDeslocamento}
                  style={{
                    fontSize: 20,
                    backgroundColor: '#F3F1F1',
                    borderRadius: 3
                  }}
                />

                <Text style={{ fontSize: 20 }}>Anotação</Text>
                <TextInput
                  onChangeText={handleChange('anotação')}
                  onBlur={handleBlur('anotação')}
                  value={values.anotação}
                  multiline
                  numberOfLines={4}
                  style={{
                    padding: 5,
                    fontSize: 20,
                    backgroundColor: '#F3F1F1',
                    borderRadius: 3
                  }}
                />

                <View style={styles.button}>
                  <Button
                    style={styles.buttonSalvar}
                    title="Salvar"
                    onPress={handleSubmit}
                  ></Button>
                  <Button
                    title="Fechar"
                    onPress={() => {
                      setVisivel(false)
                    }}
                  ></Button>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </Modal>
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => {
          setVisivel(true)
        }}
        color="white"
      />
    </View>
  )
}
