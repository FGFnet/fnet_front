import React, {Component} from 'react';
import {View, Image, StyleSheet, ScrollView} from 'react-native';
import {Text, Divider, Button, IconButton} from 'react-native-paper';
import {Colors} from '../../constants';
import Ionicons from 'react-native-vector-icons/dist/Ionicons'

export default function HomeScreen() {
    return(
        <ScrollView>
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <Image
                        source={require('../../images/fg_two.png')}
                        style={{height: 170, width: 200}}
                        resizeMode='contain'
                    />
                    <View style={styles.header_fgInfo}>
                        <Text style={styles.boldText}>김하늘 FG</Text>
                        <Text style={styles.contentText}>2/14 진행 LC  LC09</Text>
                        <Text>LC09 접수 인원  15</Text>
                    </View>
                </View>
                <Divider/>
                <View style={styles.body}>
                    <Button icon="people" contentStyle={styles.button} labelStyle={{fontSize: 40}}>
                        <Text style={{fontSize: 14, color: Colors.primary}}>LC 09</Text>
                    </Button>
                    <Button icon="chatbubbles-outline" contentStyle={styles.button}>Chat</Button>
                </View>
                <View style={styles.body}>
                    <Button icon="md-document-text-outline" contentStyle={styles.button}>Notice</Button>
                    <Button icon="folder-open-outline" contentStyle={styles.button}>Register</Button>
                </View>
                <Divider/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex:1,
        paddingTop: 80,
    },
    header: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 20,
    },
    header_fgInfo: {
        paddingLeft: 20,
        alignItems: 'center'
    },
    boldText: {
        fontWeight: 'bold',
        marginBottom: 10,
        backgroundColor: Colors.accent,
        paddingLeft: 5,
        paddingRight: 10
    },
    contentText: {
        marginBottom: 5,
    },
    body: {
        padding: 40,
        paddingBottom: 40,
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        flex: 1,
        flexDirection: 'column',
        height: 80,
        width: 150,
        alignItems: 'center',
    }
});