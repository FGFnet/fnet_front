import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { Text, Button, Divider } from 'react-native-paper';
import { Colors } from '../../constants';
import { basicStyles, GreenButton, Header } from '../../components';
import { useNavigation } from '../../providers';
import { useSelector } from 'react-redux';
import type { AppState, User } from '../../store';
import api from '../../utils/api'
import { useFocusEffect } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation();
    const loggedUser = useSelector<AppState, User>((state) => state.loggedUser)

    const [lcList, setLCList] = useState([])
    const [lc, setLC] = useState('-')
    const [today, setToday] = useState('')
    const [totalRegister, setTotalRegister] = useState(0)

    const [loading, setLoading] = useState(false)

    useFocusEffect(
        React.useCallback(() => {
            init()
        },[])
    )

    async function init() {
        try {
            setLoading(true)
            const res = await api.getLC()
            const LCList = res.data.data
            let todayDate = new Date()
            todayDate.setHours(0,0,0,0)
            setToday((todayDate.getMonth()+1)+'/'+todayDate.getDate())
            if (res.data.data.length > 0){
                setLCList(res.data.data)
                LCList.map(async (lc)=>{
                    let schedule = new Date(lc.schedule)
                    schedule.setHours(0,0,0,0)
                    if (todayDate.getTime() == schedule.getTime()) {
                        setLC(lc.name)
                        const res = await api.getLCMemberList(lc.name, true)
                        setTotalRegister(res.data.data.length)
                    }
                })
            }

        } catch(err) {
        }
        setLoading(false)
    };

    function isDateSame(date1,date2) {
        if(date1.getFullYear()===date2.getFullYear()
            && date1.getMonth()===date2.getMonth()
            && date1.getDate()===date2.getDate()) {
                return true
        }
        return false
    }

    function dateFormatter(date) {
        const schedule = new Date(date)
        return schedule.getFullYear() + '.' + (schedule.getMonth()+1) + '.' + schedule.getDate()
    }

    var otSchedule = lcList.map((lc) =>
        <View key = {lc.id} style={styles.schedule}>
            <Text style={{paddingRight: 20}}>
                {dateFormatter(lc.schedule)}
            </Text>
            <GreenButton
                text={lc.name}
                press={() => navigation.navigate('LCList',{lcName: lc.name})}
            />
        </View>
    )

    if (loading) return (<Text>Loading...</Text>)
    return(
        <ScrollView>
            { loggedUser.is_admin && <Button
                style={{position: 'absolute', bottom:0, right:0, zIndex: 1}}
                icon="settings-outline"
                onPress={() => {
                    navigation.navigate('Setting', {})
                }}
            >admin</Button> }

            <View style={styles.header}>
                <Image
                    source={require('../../images/fg_two.png')}
                    style={{height: 170, width: 200}}
                    resizeMode='contain'
                />
                <View style={styles.headerFgInfo}>
                    <Text style={styles.headerFgName}>{loggedUser.name} FG</Text>
                    <Text style={basicStyles.contentText}> {today} 진행 LC {lc}</Text>
                    {
                        lc !== '-' &&
                        <Text>{lc} 접수 인원  {totalRegister}</Text>
                    }
                </View>
            </View>

            <Divider/>
            <View style={styles.body}>
                <Button icon="people-outline"
                    contentStyle={styles.button}
                    labelStyle={{fontSize: 30}}
                    onPress={() => {
                        navigation.navigate('RegisterList', {name: lc});
                    }}
                >
                    <Text style={{fontSize: 14, color: Colors.primary}}>{lc}</Text>
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
                        loggedUser.is_admin ? navigation.navigate('Register', {}) : alert("접근권한이 없습니다. :<")
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
                   {otSchedule}
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