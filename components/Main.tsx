import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 35,
      fontWeight: 'bold',
      color: '#fff'
    }
  });
  
export default function Main() {
  return (
    <>
        <View style={styles.container}>
        <Text style={styles.text}>Amo dar o cuzinho Blackout</Text>
        <StatusBar style="auto" />
        </View>
    </>
  )
}
