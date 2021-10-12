import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet } from 'react-native';
import { scheduleNotificationAsync } from 'expo-notifications';
// import { SafeAreaView } from 'react-native-safe-area-context';

import { Text, View } from '../components/Themed';
import TimerInput from '../components/TimerInput';
import { ScreenProps, TimerConfig } from '../types';
import TimerDisplay from '../components/TimerDisplay';

const defaultTimer = {minutes: 0, seconds: 0};
// let latestId = 0;

export default function RunTimersScreen({route, navigation}: ScreenProps<'RunTimers'>) {
    const timers = route.params.timers;
    const [currentTimerIdx, setCurrentTimerIdx] = useState(0);

    let totals = timers.reduce(
        (prevTotals, timer) => ({
            minutes: prevTotals.minutes + timer.minutes,
            seconds: prevTotals.seconds + timer.seconds
        }),
        { minutes: 0, seconds: 0 }
    );

    while (totals.seconds >= 60) {
        totals.seconds -= 60;
        totals.minutes++;
    }
    
    const cancelTimers = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {timers.map((timer, i) =>
                    <TimerDisplay timer={timer} key={i} isRunning={i === currentTimerIdx} isFinished={false} />
                )}
                
                <View style={styles.totals}>
                    <Text>
                        Total time: { totals.minutes }:{ totals.seconds }
                    </Text>
                </View>
                
                <View style={styles.cancelButtonWrapper}>
                    <Button onPress={cancelTimers} title="Cancel" color="red"/>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'column',
        // alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'transparent'
    },
    scrollContainer: {
        padding: 8,
        paddingBottom: 16,
        // backgroundColor: '#fff'
    },
    cancelButtonWrapper: {
        // width: 48,
        // alignSelf: 'flex-end'
    },
    totals: {
        backgroundColor: 'transparent'
    }
});
