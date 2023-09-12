import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Test = () => {
  return (
    <View>
      <Text style={{color:"blue"}} >1 Test</Text>
      <Text style={styles.h1} >2 Test</Text>
    </View>
  )
}



const styles = StyleSheet.create({
    h1:{
        fontSize:30,
        color:"red"
    },
})

export default Test