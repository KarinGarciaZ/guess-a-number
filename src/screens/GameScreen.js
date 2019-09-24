import React, {useState, useRef} from 'react'
import { StyleSheet, View, Text, Button, Alert }  from 'react-native'
import ChosenNumber from '../components/ChosenNumber'
import Card from '../components/Card'

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  const randomNumber = Math.floor(Math.random() * (max - min)) + min
  if( randomNumber === exclude )
    return generateRandomBetween(min, max, exclude)
  return randomNumber
}

const GameScreen = props => { 
  let [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice))
  const currentLow = useRef(1)
  const currentHigh = useRef(100)

  const nextGuessHandler = direction => {
    if((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)) {
      Alert.alert('Dont lie!', 'You know this is wrong...', [{text: 'Close', style: 'cancel'}])
      return
    }

    if(direction === 'lower')
      currentHigh.current = currentGuess
    else 
      currentLow.current = currentGuess
    
    const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
    setCurrentGuess(nextNumber)
  }

  let winning = (
    <View style={styles.screen}>
      <Text style={styles.title}>Oponent's Guess</Text>
      <ChosenNumber number={currentGuess} />
      <Card styles={styles.card}>
        <Button title='Lower' onPress={() => nextGuessHandler('lower')} />
        <Button title='Greater' onPress={() => nextGuessHandler('greater')} />
      </Card>
    </View>
  )

  if( props.userChoice === currentGuess ) {
    winning = (
      <View style={styles.screen}>        
        <Card styles={styles.card}>
          <Text style={styles.title}>Correct Number:</Text>        
          <ChosenNumber number={props.userChoice} />
        </Card>
      </View>
    )
  }

  return winning
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  }, 
  title: {
    fontSize: 20
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
    elevation: 10
  }
})

export default GameScreen