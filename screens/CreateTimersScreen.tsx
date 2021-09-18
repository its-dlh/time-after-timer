import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import TimerInput from '../components/TimerInput';

export default function CreateTimersScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
    return (
        <View style={styles.container}>
            <TimerInput/>
            <TimerInput/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'column',
        // alignItems: 'center',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});
