import React from 'react';
import {View, Image, StyleSheet, ScrollView} from 'react-native';
import {Text, Button, Divider} from 'react-native-paper';
import {Colors} from '../../constants';
import { basicStyles, GreenButton, Header } from '../../components';
import {useNavigation} from '../../providers';

export default function HomeScreen() {
    const navigation = useNavigation();
    return(
        <ScrollView>
            <Button
                style={{position: 'absolute', bottom:0, right:0, zIndex: 1}}
                icon="settings-outline"
                onPress={() => {
                    navigation.navigate('Setting', {})
                }}
            >admin</Button>
            
            <View style={styles.header}>
                <Image
                    source={require('../../images/fg_two.png')}
                    style={{height: 170, width: 200}}
                    resizeMode='contain'
                />
                <View style={styles.headerFgInfo}>
                    <Text style={styles.headerFgName}>김하늘 FG</Text>
                    <Text style={basicStyles.contentText}>2/14 진행 LC  LC09</Text>
                    <Text>LC09 접수 인원  15</Text>
                </View>
            </View>
            
            <Divider/>
            <View style={styles.body}>
                <Button icon="people-outline"
                    contentStyle={styles.button}
                    labelStyle={{fontSize: 30}}
                    onPress={() => {
                        navigation.navigate('RegisterList', {});
                    }}
                >
                    <Text style={{fontSize: 14, color: Colors.primary}}>LC 09</Text>
                </Button>
                <Button
                    icon="chatbubbles-outline"
                    contentStyle={styles.button}
                    labelStyle={{fontSize: 30}}
                    onPress={() => {
                        navigation.navigate('Chat', {});
                    }}
                >
                    <Text style={{fontSize: 14, color: Colors.primary}}>Chat</Text>
                </Button>
            </View>
            <View style={styles.body}>
                <Button
                    icon="md-document-text-outline"
                    contentStyle={styles.button}
                    labelStyle={{fontSize: 30}}
                    onPress={() => {
                        navigation.navigate('Notice', {});
                    }}
                >
                    <Text style={{fontSize: 14, color: Colors.primary}}>Notice</Text>
                </Button>
                <Button
                    icon="folder-open-outline"
                    contentStyle={styles.button}
                    labelStyle={{fontSize: 30}}
                    onPress={() => {
                        navigation.navigate('Register', {});
                    }}
                >
                    <Text style={{fontSize: 14, color: Colors.primary}}>Register</Text>
                </Button>
            </View>
            <Divider/>

            <View style={basicStyles.container}>
                <View style={styles.scheduleHeader}>
                    <Header title='OT Schedule' marginBottom={0}/>
                    <Button
                        icon="settings-outline"
                        onPress={() => {
                            navigation.navigate('LCSetting')
                        }}
                    > </Button>
                </View>
                <View style={basicStyles.insideContainer}>
                    <View style={styles.schedule}>
                        <Text style={{paddingRight: 20}}>
                            2021.02.14
                        </Text>
                        <GreenButton
                            text='LC10'
                            press={() => {
                                navigation.navigate('LCList', {'lcName': 'lc10'})
                            }}
                        />
                    </View>
                    <View style={styles.schedule}>
                        <Text style={{paddingRight: 20}}>
                            2021.02.15
                        </Text>
                        <GreenButton
                            text='LC57'
                        />
                    </View>
                    <View style={styles.schedule}>
                        <Text style={{paddingRight: 20}}>
                            2021.02.16
                        </Text>
                        <GreenButton
                            text='LC88'
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 20,
    },
    headerFgName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        backgroundColor: Colors.accent,
        paddingLeft: 5,
        paddingRight: 14,
    },
    headerFgInfo: {
        paddingLeft: 20,
        alignItems: 'center'
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
    },
    scheduleHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    schedule:{
        flexDirection: 'row',
        alignItems: 'center'
    }
});