import * as React from 'react';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text, View } from '../components/Themed';
import TimerInput from '../components/TimerInput';
import { TimerConfig } from '../types';

const defaultTimer = {minutes: 0, seconds: 0};
// let latestId = 0;

export default function CreateTimersScreen() {
    const [timers, setTimers] = useState<TimerConfig[]>([{...defaultTimer}]);

    function addTimer() {
        setTimers(timers => ([...timers, {...defaultTimer}]))
    }

    const updateTimer = (i: number, timer: TimerConfig) => {
        let newTimers = [...timers];
        newTimers[i] = timer;
        console.log('newTimers', newTimers);
        setTimers(newTimers);
    }

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

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {timers.map((timer, i) =>
                    <TimerInput timer={timer} key={i} onChange={timer => updateTimer(i, timer)} />
                )}
                
                <View style={styles.addButtonWrapper}>
                    <Button onPress={addTimer} title="+"/>
                </View>

                <View>
                    <Text>
                        Total time:
                        { totals.minutes } min,
                        { totals.seconds } sec
                    </Text>
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
    addButtonWrapper: {
        width: 48,
        alignSelf: 'flex-end'
    }
});
