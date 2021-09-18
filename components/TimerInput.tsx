import React from 'react';
import { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { TimerConfig } from '../types';
import { Text, View } from './Themed';

export interface TimerInputProps {
    timer?: TimerConfig,
    onChange?: (timer: TimerConfig) => any
}

export default function TimerInput({ timer, onChange }: TimerInputProps) {
    const [minutes, setMinutes] = useState(timer?.minutes || 0);
    const [seconds, setSeconds] = useState(timer?.seconds || 0);

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.numberInput}
                    keyboardType='numeric'
                    onChangeText={(value)=> setMinutes(parseInt(value))}
                    defaultValue={`${minutes || ''}`}
                    maxLength={10}  //setting limit of input
                />
                
                <Text
                    style={styles.inputLabel}
                    lightColor="rgba(0,0,0,0.8)"
                    darkColor="rgba(255,255,255,0.8)">
                    Minutes
                </Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.numberInput}
                    keyboardType='numeric'
                    onChangeText={(value)=> setSeconds(parseInt(value))}
                    defaultValue={`${seconds || ''}`}
                    maxLength={10}  //setting limit of input
                />
                
                <Text
                    style={styles.inputLabel}
                    lightColor="rgba(0,0,0,0.8)"
                    darkColor="rgba(255,255,255,0.8)">
                    Seconds
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // alignItems: 'center',
        // marginHorizontal: 50,
        borderRadius: 8,
        shadowRadius: 8,
        shadowOpacity: 0.5,
        shadowColor: '#000',
        elevation: 3,
        padding: 8,
        marginVertical: 8,
        marginHorizontal: 8,
        flex: 0,
        flexDirection: 'row'
    },
    inputContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        // marginHorizontal: 50,
        flex: 1,
    },
    numberInput: {
        flex: 1,
        textAlign: 'center',
        marginHorizontal: 8,
        borderRadius: 8,
        backgroundColor: '#eee',
        fontSize: 20,
        fontWeight: 'bold'
    },
    inputLabel: {
        fontSize: 17,
        lineHeight: 24,
        textAlign: 'center',
    },
});
