import React from 'react'
import { StyleSheet, TextInput} from 'react-native'

const Input = props => {
  return (
    <TextInput 
      {...props}
      style={{...styles.input, ...props.style}} 
      onChangeText={text => props.changeText(text)}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#DDD',
    height: 30,
    borderRadius: 4,
    padding: 2
  },
})

export default Input