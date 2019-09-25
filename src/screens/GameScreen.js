import React, {useState, useRef, useEffect} from 'react'
import { StyleSheet, View, Text, ScrollView, Alert }  from 'react-native'
import ChosenNumber from '../components/ChosenNumber'
import Card from '../components/Card'
import Icon from 'react-native-vector-icons/FontAwesome'
import MainButton from '../components/MainButton'

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  const randomNumber = Math.floor(Math.random() * (max - min)) + min
  if( randomNumber === exclude )
    return generateRandomBetween(min, max, exclude)
  return randomNumber
}

const GameScreen = props => { 
  const initialGuess = generateRandomBetween(1, 100, userChoice)
  let [currentGuess, setCurrentGuess] = useState(initialGuess)
  let [pastGuess, setPastGuess] = useState([initialGuess])
  let [numOfRounds, setNumOfRounds] = useState(0)
  const currentLow = useRef(1)
  const currentHigh = useRef(100)

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if( currentGuess === userChoice )
      onGameOver(pastGuess.length)
  },[currentGuess])

  const nextGuessHandler = direction => {
    if((direction === 'lower' && currentGuess < userChoice) || (direction === 'greater' && currentGuess > userChoice)) {
      Alert.alert('Dont lie!', 'You know this is wrong...', [{text: 'Close', style: 'cancel'}])
      return
    }

    if(direction === 'lower')
      currentHigh.current = currentGuess -1
    else 
      currentLow.current = currentGuess +1
    
    const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
    setCurrentGuess(nextNumber)    
    setPastGuess(rounds => [nextNumber, ...rounds])
    //setNumOfRounds(rounds => rounds + 1)
  }
  
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Oponent's Guess</Text>
      <ChosenNumber number={currentGuess} />
      <Card styles={styles.card}>       
        <MainButton pressed={() => nextGuessHandler('lower')} style={ {width: '25%'}}>
          <Icon size={20} name="minus" color='#444'/>
        </MainButton> 
        <MainButton pressed={() => nextGuessHandler('greater')} style={ {width: '25%'}}>
          <Icon size={20} name="plus" color='#444'/>
        </MainButton>
      </Card>
      <ScrollView>
        {pastGuess.map( guess => <Card key={guess}><Text>{guess}</Text></Card> )}
      </ScrollView>
    </View>
  )
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
  },
  card2: {
    width: '90%',
    elevation: 10
  },
})

export default GameScreen