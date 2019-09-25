import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import { Colors } from '../constants/index'

const MainButton = props => {
  return(
    <TouchableOpacity onPress={ props.pressed } style={{...styles.buttonContainer, ...props.style}}>
      <View style={{ ...styles.button }}>
        {props.children}
      </View> 
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',    
    borderColor: Colors.primary,      
    backgroundColor: Colors.accent, 
    borderRadius: 15,
    borderWidth: 2,
    paddingVertical: 10
  },
  buttonContainer: {    
    width: '80%',
  }
})

export default MainButton