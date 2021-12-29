import {Colors} from '../constants';
import { StyleSheet, Text, View } from 'react-native';

export const basicStyles = StyleSheet.create({
    container: {
        padding: 40,
        flex: 1,
        alignItems: 'flex-start'
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        backgroundColor: Colors.accent,
        paddingLeft: 5,
        paddingRight: 14,
    },
    contentText: {
        marginBottom: 8,
    },
    insideRowContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
    },
    paperTable: {
        height: 450,
    }
})