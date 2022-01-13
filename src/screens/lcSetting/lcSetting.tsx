import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, Pressable, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import { basicStyles, GreenButton, Header, InputForm } from '../../components';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import api from '../../utils/api';

export default function LCSettingScreen() {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectDay, setSelectDay] = useState("")

    // Original LC information
    const [firstLC, setFirstLC] = useState({"name":"", "schedule":""});
    const [secondLC, setSecondLC] = useState({"name":"", "schedule":""});
    const [thirdLC, setThirdLC] = useState({"name":"", "schedule":""});

    // Change LC information
    const [newFirstLC, onChangeFirstLC] = useState({"name":"", "schedule":""})
    const [newSecondLC, onChangeSecondLC] = useState({"name":"", "schedule":""})
    const [newThirdLC, onChangeThirdLC] = useState({"name":"", "schedule":""})

    const [lcList, setLCList] = useState([])
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true)
                const res = await api.getLCList()
                setLCList(res.data.data)
                for (let i=0; i<lcList.length; i++){
                    if (i == 0) {
                        setFirstLC({"name":lcList[0]['name'], "schedule": lcList[0]['schedule']})
                        onChangeFirstLC({"name":lcList[0]['name'], "schedule": lcList[0]['schedule']})
                    }
                    else if (i == 1) {
                        setSecondLC({"name":lcList[0]['name'], "schedule": lcList[0]['schedule']})
                        onChangeSecondLC({"name":lcList[0]['name'], "schedule": lcList[0]['schedule']})
                    }
                    else {
                        setThirdLC({"name":lcList[0]['name'], "schedule": lcList[0]['schedule']})
                        onChangeThirdLC({"name":lcList[0]['name'], "schedule": lcList[0]['schedule']})
                    }
                }
            } catch (err) {
            }
            setLoading(false)
        };
        fetchUsers();
    })

    async function updateLCSetting() {
        try{
            if(firstLC['name']!=="" && firstLC['name']!==newFirstLC['name']){
                alert('You can not change LC')
                return;
            }
            if(secondLC['name']!=="" && secondLC['name']!==newSecondLC['name']){
                alert('You can not change LC')
                return;
            }
            if(thirdLC['name']!=="" && thirdLC['name']!==newThirdLC['name']){
                alert('You can not change LC')
                return;
            }

            const res_first = await api.getLC({"name":newFirstLC['name']})
            if(res_first.data.data.length > 1) await api.createLC(newFirstLC)
            else await api.editLC(newFirstLC)
            
            const res_second = await api.getLC({"name":newSecondLC['name']})
            if(res_second.data.data.length > 1) await api.createLC(newSecondLC)
            else await api.editLC(newSecondLC)

            const res_third = await api.getLC({"name":newThirdLC['name']})
            if(res_third.data.data.length > 1) await api.createLC(newThirdLC)
            else await api.editLC(newThirdLC)

        } catch (err) {

        }
        location.reload()
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
        if (selectDay === '1') onChangeFirstLC({"name":newFirstLC['name'], "schedule":date.format("yyyy/MM/dd")})
        else if (selectDay === '2') onChangeSecondLC({"name":newSecondLC['name'], "schedule":date.format("yyyy/MM/dd")})
        else onChangeThirdLC({"name":newThirdLC['name'], "schedule":date.format("yyyy/MM/dd")})
    }

    if (loading) return (<Text>Loading...</Text>)
    return(
        <ScrollView>
            <View style={basicStyles.container}>
                <Header title='LC 설정'/>

                <View style={basicStyles.insideRowContainer}>
                    <Text style={{paddingRight: 20}}>첫쨋날</Text>
                    
                    <InputForm
                        placeholder='LC명'
                        height={40}
                        style={{width: '40%', paddingRight: 20}}
                        value={firstLC}
                        onChangeText={text=>setFirstLC(text)}
                    />
                    <TouchableOpacity onPress={()=>showDatePicker('1')}>
                        <InputForm
                            placeholder='날짜'
                            editable={false}
                            value={newFirstLC['schedule']}
                            height={40}
                            pointerEvents="none"
                            style={{width: 120}}
                        />
                    </TouchableOpacity>
                </View>

                <View style={basicStyles.insideRowContainer}>
                    <Text style={{paddingRight: 20}}>둘쨋날</Text>
                    
                    <InputForm
                        placeholder='LC명'
                        height={40}
                        style={{width: '40%', paddingRight: 20}}
                        value={secondLC}
                        onChangeText={text=>setSecondLC(text)}
                    />
                    <TouchableOpacity onPress={()=>showDatePicker('2')}>
                        <InputForm
                            placeholder='날짜'
                            editable={false}
                            value={newSecondLC['schedule']}
                            height={40}
                            pointerEvents="none"
                            style={{width: 120}}
                        />
                    </TouchableOpacity>
                </View>

                <View style={basicStyles.insideRowContainer}>
                    <Text style={{paddingRight: 20}}>셋쨋날</Text>
                    
                    <InputForm
                        placeholder='LC명'
                        height={40}
                        style={{width: '40%', paddingRight: 20}}
                        value={thirdLC}
                        onChangeText={text=>setThirdLC(text)}
                    />
                    <TouchableOpacity onPress={()=>showDatePicker('3')}>
                        <InputForm
                            placeholder='날짜'
                            editable={false}
                            value={newThirdLC['schedule']}
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
                </View>
                <GreenButton
                    text='저장' 
                    viewStyle={{
                        width:'100%', 
                        flex: 1, 
                        alignItems: 'flex-end'
                    }}
                    onClick={updateLCSetting}
                />
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