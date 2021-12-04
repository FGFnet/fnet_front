import React from 'react';
import {View, Image, StyleSheet, ScrollView} from 'react-native';
import {Text, Divider, Button, IconButton} from 'react-native-paper';
import {Colors} from '../../constants';
import { basicStyles } from '../../components';
import {useNavigation} from '../../providers';

export default function HomeScreen() {
    const navigation = useNavigation();

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
                        <Text style={basicStyles.titleText}>김하늘 FG</Text>
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
                    <Text style={basicStyles.titleText}> OT Schedule </Text>
                    <View style={basicStyles.insideRowContainer}>
                        <View style={styles.schedule_date}>
                            <Text style={basicStyles.contentText}>
                                2021.02.14
                            </Text>
                            <Text style={basicStyles.contentText}>
                                2021.02.15
                            </Text>
                            <Text style={basicStyles.contentText}>
                                2021.02.16
                            </Text>
                        </View>
                        <View style={styles.schedule_LC}>
                            <Text style={basicStyles.contentText}>
                                LC 09
                            </Text>
                            <Text style={basicStyles.contentText}>
                                LC 57
                            </Text>
                            <Text style={basicStyles.contentText}>
                                LC 88
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex:1,
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
    schedule_date: {
        flex: 1
    },
    schedule_LC: {
        flex: 1
    }
});