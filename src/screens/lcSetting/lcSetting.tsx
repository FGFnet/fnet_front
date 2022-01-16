import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, Pressable, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import { basicStyles, GreenButton, Header, InputForm } from '../../components';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import api from '../../utils/api';

export default function LCSettingScreen() {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectDay, setSelectDay] = useState("")

    const [firstLC, setFirstLC] = useState({"old_id":0, "name": "", "schedule":""});
    const [secondLC, setSecondLC] = useState({"old_id":0, "name": "", "schedule":""});
    const [thirdLC, setThirdLC] = useState({"old_id":0, "name": "", "schedule":""});

    const [lcList, setLCList] = useState([])
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true)
                const res = await api.getLC()
                setLCList(res.data.data)
                if(lcList[0]) setFirstLC({"old_id": lcList[0]['id'], "name": lcList[0]['name'], "schedule": lcList[0]['schedule']})
                if(lcList[1]) setSecondLC({"old_id": lcList[1]['id'], "name": lcList[1]['name'], "schedule": lcList[1]['schedule']})
                if(lcList[2]) setThirdLC({"old_id": lcList[2]['id'], "name": lcList[2]['name'], "schedule": lcList[2]['schedule']})
            } catch (err) {
            }
            setLoading(false)
        };
        fetchUsers();
    })

    async function updateLCSetting(lc) {
        try {
            if (lc === '1') await api.editLC(firstLC)
            else if (lc == '2') await api.editLC(secondLC)
            else await api.editLC(thirdLC)
        } catch(err) {
        }
    }

    const showDatePicker = (selectDay) => {
        setDatePickerVisibility(true);
        setSelectDay(selectDay);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        hideDatePicker()
        if (selectDay === '1') setFirstLC({"old_id": firstLC['old_id'], "name":firstLC['name'], "schedule":date.format("yyyy/MM/dd")})
        else if (selectDay === '2') setSecondLC({"old_id": secondLC['old_id'], "name": secondLC['name'], "schedule":date.format("yyyy/MM/dd")})
        else setThirdLC({"old_id":thirdLC['old_id'], "name":thirdLC['name'], "schedule":date.format("yyyy/MM/dd")})
    }

    if (loading) return (<Text>Loading...</Text>)
    return(
        <ScrollView>
            <View style={basicStyles.container}>
                <Header title='LC 설정'/>

                <View style={basicStyles.insideRowContainer}>
                    <Text style={{paddingRight: 20}}>첫쨋날</Text>
                    
                    <InputForm
                        placeholder={firstLC['name']}
                        height={40}
                        style={{width: '40%', paddingRight: 20}}
                        value={firstLC['name']}
                        onChangeText={text=>setFirstLC(text)}
                    />
                    <TouchableOpacity onPress={()=>showDatePicker('1')}>
                        <InputForm
                            placeholder={firstLC['schedule']}
                            editable={false}
                            value={firstLC['schedule']}
                            height={40}
                            pointerEvents="none"
                            style={{width: 120}}
                        />
                    </TouchableOpacity>
                    <GreenButton
                    text='저장' 
                    viewStyle={{
                        width:'100%', 
                        flex: 1, 
                        alignItems: 'flex-end'
                    }}
                    onClick={updateLCSetting('1')}
                    />
                </View>

                <View style={basicStyles.insideRowContainer}>
                    <Text style={{paddingRight: 20}}>둘쨋날</Text>
                    
                    <InputForm
                        placeholder={secondLC['name']}
                        height={40}
                        style={{width: '40%', paddingRight: 20}}
                        value={secondLC['name']}
                        onChangeText={text=>setSecondLC(text)}
                    />
                    <TouchableOpacity onPress={()=>showDatePicker('2')}>
                        <InputForm
                            placeholder={secondLC['schedule']}
                            editable={false}
                            value={secondLC['schedule']}
                            height={40}
                            pointerEvents="none"
                            style={{width: 120}}
                        />
                    </TouchableOpacity>

                    <GreenButton
                    text='저장' 
                    viewStyle={{
                        width:'100%', 
                        flex: 1, 
                        alignItems: 'flex-end'
                    }}
                    onClick={updateLCSetting('2')}
                    />
                </View>

                <View style={basicStyles.insideRowContainer}>
                    <Text style={{paddingRight: 20}}>셋쨋날</Text>
                    
                    <InputForm
                        placeholder={thirdLC['name']}
                        height={40}
                        style={{width: '40%', paddingRight: 20}}
                        value={thirdLC['name']}
                        onChangeText={text=>setThirdLC(text)}
                    />
                    <TouchableOpacity onPress={()=>showDatePicker('3')}>
                        <InputForm
                            placeholder={thirdLC['schedule']}
                            editable={false}
                            value={thirdLC['schedule']}
                            height={40}
                            pointerEvents="none"
                            style={{width: 120}}
                        />
                    </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                    <GreenButton
                    text='저장' 
                    viewStyle={{
                        width:'100%', 
                        flex: 1, 
                        alignItems: 'flex-end'
                    }}
                    onClick={updateLCSetting('3')}
                    />
                </View>
            </View>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    notice_container: {
        margin: '5%'
    },
    notice: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    notice_title:{
        fontSize: 16,
        fontWeight: 'bold',
    },
});