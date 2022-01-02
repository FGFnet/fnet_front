import React from 'react';
import {Colors} from '../constants';
import { View, StyleSheet } from 'react-native';
import { withTheme, TextInput } from 'react-native-paper';

function InputForm(props) {
    const height = props.height

    return(
        <View style={props.style}>
            <TextInput
                style={{
                    backgroundColor: Colors.white,
                    height: height,
                    fontSize: 14
                }}
                multiline={props.multiline}
                placeholder={props.placeholder}
                value={props.value}
                onChangeText={props.onChangeText}
                mode='outlined'
                outlineColor= {Colors.primary_lighter}
            />
        </View>
    );
}

export default withTheme(InputForm);
