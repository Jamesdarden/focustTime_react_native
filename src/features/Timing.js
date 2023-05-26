import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {RoundedButton} from '../components/RoundedButton';
import { colors } from '../utils/colors';


export const Timing = ({onChangeTime}) => {

  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton title="10" size={75} onPress={() => onChangeTime(10)}/>
      </View>
      <View style={styles.timingButton}>
        <RoundedButton title="30" size={75} onPress={() => onChangeTime(30)}/>
      </View>
      <View style={styles.timingButton}>
        <RoundedButton title="1h" size={75} onPress={() => onChangeTime(59.99)}/>
      </View>
    
    </>
  )
}


const styles = StyleSheet.create({
  timingButton:{
    flex:1,
    alignItems:'center',
  }
})