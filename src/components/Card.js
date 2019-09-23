import React from 'react'
import { View, StyleSheet} from 'react-native'
import {Colors} from '../constants'

const Card = props => {
  return (
    <View style={{...styles.card, ...props.styles}}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.grey,
    borderRadius: 5,    
    paddingVertical: 20,
  },
})

export default Card