import * as React from 'react';
import { Button, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import TimerInput from '../components/TimerInput';

export default function CreateTimersScreen() {
    return (
        <View style={styles.container}>
            <TimerInput/>
            
            <View style={styles.addButtonWrapper}>
                <Button onPress={() => {}} title="+"/>
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
