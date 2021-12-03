import {Colors} from '../constants';
import { StyleSheet, Text, View } from 'react-native';

export const basicStyles = StyleSheet.create({
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        backgroundColor: Colors.accent,
        paddingLeft: 5,
        paddingRight: 14,
    },
    contentText: {
        marginBottom: 5,
    }
})