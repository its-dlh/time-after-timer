import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { TimerConfig } from '../types';
import { Text, View } from './Themed';

export interface TimerDisplayProps {
    timer: TimerConfig;
    isRunning?: boolean;
    isFinished?: boolean;
    onFinished?: () => void;
}

export default function TimerDisplay({ timer, isRunning, isFinished, onFinished }: TimerDisplayProps) {
    const [remainingMins, setRemainingMins] = useState(timer.minutes);
    const [remainingSecs, setRemainingSecs] = useState(timer.seconds);
    const [intervalId, setIntervalId] = useState(0);
    
    useEffect(() => {
        let intervalId: number;
        
        const decrementRemainingTime = () => {
            console.log('decrementing');
            setRemainingSecs(secs => secs - 1);
        }
        
        const cancelTimer = () => {
            if (intervalId) window.clearInterval(intervalId);
        }
        
        if (isRunning) {
            console.log('starting interval');
            intervalId = window.setInterval(decrementRemainingTime, 1000);
            // setIntervalId(intervalId);
        } else {
            cancelTimer();
        }
        
        return cancelTimer;
    }, [isRunning]);
    
    while (remainingSecs < 0) {
        // setRemainingSecs(secs => secs + 60);
        // setRemainingMins(mins => mins - 1);
    }
    
    console.log('remainingSecs', remainingSecs);
    
    useEffect(() => {
        if (isRunning && remainingMins <= 0 && remainingSecs <= 0 && onFinished) {
            console.log("We're finished!");
            onFinished();
        }
    })

    return (
        <View style={styles.container}>
            <View style={styles.timerContainer}>
                <Text
                    style={styles.timeDisplay}
                    lightColor="rgba(0,0,0,0.8)"
                    darkColor="rgba(255,255,255,0.8)">
                    { `${remainingMins} : ${remainingSecs}` }
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
    timerContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        // marginHorizontal: 50,
        flex: 0,
    },
    timeDisplay: {
        fontSize: 17,
        lineHeight: 24,
        textAlign: 'center',
    },
});
