import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1 //in CSS =  display: flex
  }, 
  bigBlue: {
    color: 'blue', //in CSS = color: 'blue'
    fontWeight: 'bold', //in CSS = font-weight: 'bold'
    fontSize: 30, //in CSS = font-size: 30
  },
  red: {
    color: 'red'
  },
});

function App(props) {
  return(
    <View style={styles.container}>
      <Text style={styles.bigBlue}>Salve salve</Text>
      <Text style={styles.red}>Cachorrada</Text>
      <Text style={{ color: 'pink' }}>INLINE STYLES</Text>
    </View>
  )
}