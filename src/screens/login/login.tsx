import React from 'react';
import { View, StyleSheet, ScrollView, TextInput, Image } from 'react-native';
import { Text, Button, Checkbox } from 'react-native-paper';
import { Colors } from '../../constants'

export default function LoginScreen() {
    const [checked, setChecked] = React.useState(false);

    return(
        <ScrollView>
            <View style={styles.wrapper}>
                <Image
                    source={require('../../images/fg_two.png')}
                    style={{height: 170, width: 200}}
                    resizeMode='contain'
                />
                <View style={styles.header}>
                    <Text style={styles.header_text}>Login</Text>
                </View>
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder='이름'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='학번'
                    />
                </View>
                <View style={styles.checkbox_container}>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                    />
                    <Text>자동 로그인</Text>
                </View>
                <View style={styles.container}>
                    <Button
                        style={styles.button}
                        labelStyle={styles.button_text}
                    >
                        Login
                    </Button>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    header: {
        flex: 1,
        alignItems: 'center'
    },
    header_text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.darker
    },
    container: {
        flex: 1,
        alignItems: 'center',
        margin: 10
    },
    input: {
        height: 37,
        width: 250,
        padding: 10,
        marginTop: 10,
        borderWidth: 1,
        borderColor: Colors.primary_lighter,
        borderRadius: 4
    },
    checkbox_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginHorizontal: 80
    },
    button: {
        height: 37,
        width: 250,
        backgroundColor: Colors.primary,
        borderRadius: 4
    },
    button_text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.white,
        paddingLeft: 5,
        paddingRight: 14
    }
});