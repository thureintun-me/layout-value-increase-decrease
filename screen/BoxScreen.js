import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SquareValue from '../components/SuareValue';

const BoxScreen = (props) => {
    
    

    return (
        <View style={styles.boxContainer}>
            <SquareValue></SquareValue>
            <SquareValue></SquareValue>
            <SquareValue></SquareValue>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        boxContainer:{
            marginTop:50,
        }
    }
)
export default BoxScreen;