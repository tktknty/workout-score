import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const WorkoutScreen = () => {
  return (
    <View style={styles.container}>
      <Text>WorkoutScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundcolor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
