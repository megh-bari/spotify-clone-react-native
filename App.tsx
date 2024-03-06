import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Spotiffy from './Components/Spotiffy'

export default function App() {
  return (
    <View style={styles.body}>
      <ScrollView>
        <Spotiffy>
          
        </Spotiffy>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  body:{
flex:1,
backgroundColor: '#060606'
  },
})