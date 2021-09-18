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
    const [minutes, setMinutes] = useState(`${timer?.minutes || 0}`);
    const [seconds, setSeconds] = useState(`${timer?.seconds || 0}`);

    function updateTimer() {
        let numMinutes = parseInt(minutes) || 0;
        let numSeconds = parseInt(seconds) || 0;

        if (numMinutes < 0) numMinutes = 0;

        while (numSeconds >= 60) {
            numSeconds -= 60;
            numMinutes++
        }

        if (numSeconds < 0) numSeconds = 0;

        if (onChange) {
            console.log('firing onChange', {numMinutes, numSeconds});

            onChange({
                minutes: numMinutes,
                seconds: numSeconds
            })
        }
    }

    function updateMinutes(minutes: string) {
        setMinutes(minutes);
        updateTimer();
    }

    function updateSeconds(seconds: string) {
        setSeconds(seconds);
        updateTimer();
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.numberInput}
                    keyboardType='numeric'
                    onChangeText={updateMinutes}
                    defaultValue={minutes}
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
                    onChangeText={updateSeconds}
                    defaultValue={seconds}
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
        shadowRadius: 4,
        shadowOpacity: 0.2,
        shadowColor: '#000',
        elevation: 3,
        padding: 8,
        marginVertical: 8,
        flex: 0,
        flexDirection: 'row'
    },
    inputContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        // marginHorizontal: 50,
        flex: 1,
    },
    numberInput: {
        width: 64,
        paddingVertical: 8,
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
