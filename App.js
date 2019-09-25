import React, {useState} from 'react';
import { StyleSheet, View,} from 'react-native';

import StartGameScreen from './src/screens/StartGameScreen'
import GameScreen from './src/screens/GameScreen'
import GameOverScreen from './src/screens/GameOverScreen'
import Header from './src/components/Header'
// import * as Font from 'expo-font'
// import { AppLoading } from 'expo'

// const fetchFonts = () => {
//   return Font.loadAsync({
//     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
//   })
// }

const App = () => {

  const [userNumber, setUserNumber] = useState()
  const [guessRounds, setGuessRounds] = useState(0)
  const [dataLoaded, setDataLoaded] = useState(false)

  // if(!dataLoaded)
  //   return <AppLoading startAsync={fetchFonts} />

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber)
  }

  const newGameHandler = () => {
    setUserNumber(0)
    setGuessRounds(0)
  }

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds)
  }

  let content = <StartGameScreen onStartGame={startGameHandler}/>
  
  if( userNumber && !guessRounds )
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  else if( guessRounds )
    content = <GameOverScreen numOfRounds={guessRounds} onNewGame={newGameHandler}/>


  return (
    <View style={styles.screen}>
      <Header title='Guess a number'/>
      { content }
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default App;
