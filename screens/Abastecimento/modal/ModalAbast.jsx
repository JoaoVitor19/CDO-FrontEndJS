import React, { useState } from 'react'
import { View, Text, Modal, StyleSheet, Button, TextInput } from 'react-native'
import { FAB } from 'react-native-paper'
import { Formik } from 'formik'

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#fff',
    width: '80%',
    height: '80%',
    display: 'flex',
    padding: 20,
    borderRadius: 5,
    margin: 35,
    borderColor: '#de4126',
    borderLeftWidth: 5
  },
  button: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row-reverse'
  },
  inputData: {
    display: 'flex',
    flexDirection: 'row-reverse'
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
          initialValues={{ email: '' }}
          onSubmit={values => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.background}>
              <View style={styles.inputData}>
                <View>
                  <Text>Data</Text>
                  <TextInput
                  
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                   /* value={values.email}*/
                  />
                </View>
                <View>
                  <Text>Hora</Text>
                  <TextInput
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    StyleSheet={{with:5}}
                  />
                </View>
              </View>
              <View style={styles.button}>
                <Button title="Salvar" onPress={handleSubmit}></Button>
                <Button
                  title="Fechar"
                  onPress={() => {
                    setVisivel(false)
                  }}
                ></Button>
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
