/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import { StyleSheet, View,} from 'react-native';

import StartGameScreen from './src/screens/StartGameScreen'
import GameScreen from './src/screens/GameScreen'
import Header from './src/components/Header'

const App = () => {

  const [userNumber, setUserNumber] = useState()

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber)
  }

  return (
    <View style={styles.screen}>
      <Header title='Guess a number'/>
      { !userNumber? 
        <StartGameScreen onStartGame={startGameHandler}/> :
        <GameScreen userChoice={userNumber}/> 
      }
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default App;
