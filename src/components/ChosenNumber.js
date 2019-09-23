import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {Colors} from '../constants'

const ChosenNumber = props => {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.number}>{props.number}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  numberContainer: {
    marginVertical: 10,
    borderWidth: 2,
    borderColor: Colors.accent,
    borderRadius: 10,
    padding: 10, 
  },
  number: {
    fontSize: 20,    
    color: Colors.accent
  }
})

export default ChosenNumber