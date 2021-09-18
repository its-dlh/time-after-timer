import * as React from 'react';
import { useState } from 'react';
import { Button, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import TimerInput from '../components/TimerInput';
import { TimerConfig } from '../types';

const defaultTimer = {minutes: 0, seconds: 0};
let latestId = 0;

export default function CreateTimersScreen() {
    const [timers, setTimers] = useState<TimerConfig[]>([{...defaultTimer, id: latestId}]);

    function addTimer() {
        setTimers(timers => ([...timers, {...defaultTimer, id: ++latestId}]))
    }

    return (
        <View style={styles.container}>
            {timers.map(timer =>
                <TimerInput timer={timer} key={timer.id} />
            )}
            
            <View style={styles.addButtonWrapper}>
                <Button onPress={addTimer} title="+"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'column',
        // alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 8
    },
    addButtonWrapper: {
        width: 48,
        alignSelf: 'flex-end'
    }
});
