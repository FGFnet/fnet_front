import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, ScrollView} from 'react-native';
import {Text, Button, Divider} from 'react-native-paper';
import {Colors} from '../../constants';
import { basicStyles, GreenButton, Header } from '../../components';
import {useNavigation} from '../../providers';
import api from '../../utils/api'

export default function HomeScreen() {
    const navigation = useNavigation();

    const [fgData, setFGData] = useState([]) // FG info
    const [lcData, setLCData] = useState([]) // LC list of FG
    const [firstLCData, setFirstLCData] = useState({})

    const [totalRegister, setTotalRegister] = useState(0)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchUsers = async() => {
            try {
                setLoading(true)
                const res_fg = await api.getFG()
                setFGData(res_fg.data.data)
                const res_lc = await api.getLCList()
                setLCData(res_lc.data.data)
                if (res_lc.data.length == 0){ // empty LC list
                    setFirstLCData([{'name': 'None', 'schedule': '/'}])
                    setTotalRegister(0)
                } else{
                    const firstDate = lcData[0]['schedule'].split('-')
                    setFirstLCData({"name": lcData[0]['name'], "schedule": +firstDate[1] + '/' + +firstDate[2]})
                    const res_register = await api.getLCMemberList(firstLCData['id'], true)
                    setTotalRegister(res_register.data.length)
                }
            } catch(err) {

            }
            setLoading(false)
        };
        fetchUsers();
    })


    const is_admin = () => {
        if (fgData['is_admin']){
            return 1
        } else {
            return 0
        }
    }

    var otSchedule = lcData.map((lc) =>
        <View key = {lc['id']} style={styles.schedule}>
            <Text style={{paddingRight: 20}}>
                {lc['schedule']}
            </Text>
            <GreenButton
                text={lc['name']}
                press={()=>alert('LC09')}
            />
        </View>
    )

    if (loading) return (<Text>Loading...</Text>)
    return(
        <ScrollView>
            <Button
                style={{position: 'absolute', bottom:0, right:0, zIndex: is_admin()}}
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
                    <Text style={styles.headerFgName}>{fgData['name']} FG</Text>
                    <Text style={basicStyles.contentText}> {firstLCData['schedule']} 진행 LC {firstLCData['name']}</Text>
                    <Text>{firstLCData['name']} 접수 인원  {totalRegister}</Text>
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
                    <Text style={{fontSize: 14, color: Colors.primary}}>{firstLCData['name']}</Text>
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