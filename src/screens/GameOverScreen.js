import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import MainButton from '../components/MainButton'

const GameOverScreen = props => {
  return(
    <View style={styles.screen}>
      <Text>
        The game is over! in 
        <Text style={styles.highlight}>{props.numOfRounds} </Text> 
        tries.
      </Text>
      <Image 
        style={styles.image} 
        source={require('../../assets/img.jpg')}
      />
      <Image 
        style={styles.image} 
        source={{uri:'https://static.iris.net.co/semana/upload/images/2019/5/28/617378_1.jpg'}}
      />
      <MainButton pressed={props.onNewGame.bind(this)}>
        <Text style={{color: 'white'}}>NEW GAME</Text>
      </MainButton>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 200,
    borderColor: 'black',
    borderWidth: 3,
    padding: 2
  },
  highlight: {
    color: 'red'
  }
})

export default GameOverScreen