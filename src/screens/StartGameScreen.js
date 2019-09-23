import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, Button, Keyboard, Alert } from 'react-native'
import Card from '../components/Card'
import Input from '../components/Input'
import ChosenNumber from '../components/ChosenNumber'
import {Colors} from '../constants'

const StartGameScreen = props => {

  let [valor, setValor] = useState('')
  let [confirmed, setConfirmed] = useState(false)
  let [selectedNumber, setSelectedNumber] = useState()

  const onChangeInput = text => {
    setValor(text.replace(/[^0-9]/g, ''))
  }

  const resetInputHandler = () => {
    setValor('')
  }

  const confirmInputHandler = () => {
    const chosenNumber = +valor
    if(chosenNumber <= 0 || isNaN(chosenNumber) || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!', 
        'Numbers have to be between 1 and 99',
        [{text: 'Okay', style: 'cancel', onPress: resetInputHandler}])
      return
    }
    setConfirmed(true)
    setSelectedNumber(+valor)
    setValor('')
  }  

  let confirmedOutput;

  if( confirmed ) {
    confirmedOutput = (
      <Card styles={styles.summaryContainer}>
        <Text>Your Chosen Number is:</Text>
        <ChosenNumber number={selectedNumber} />
        <Button title='START GAME' onPress={() => props.onStartGame(selectedNumber)}/>
      </Card>
    )
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text>Start a New Game!</Text>
        <Card styles={styles.card}>
          <Text style={styles.title}>Select a Number</Text>
          <Input 
            value={valor}
            style={styles.input} 
            changeText={onChangeInput}
            blurOnSubmit
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='numeric'
            maxLength={2}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Reset" color={Colors.accent} onPress={resetInputHandler}/>
            </View>
            <View style={styles.button}>
              <Button title="Confirm" color={Colors.primary} onPress={confirmInputHandler}/>
            </View>          
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>    
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',    
  },
   input: {
     width: '90%',
     marginVertical: 15,
     textAlign: 'center'
   },
   title: {
     color: 'black',
     fontSize: 18
   },
   buttonContainer: {
     flexDirection: 'row',
     justifyContent: 'space-around',    
     width: '100%',
   },
   card: {
    width: '80%',
    alignItems: 'center',    
    elevation: 15
   },
   button: {
     width: 100
   },
   summaryContainer: {
    width: '60%',
    alignItems: 'center',    
    elevation: 15,
    marginTop: 20
   }
})

export default StartGameScreen