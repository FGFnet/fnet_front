import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import { basicStyles, GreenButton, Header, InputForm } from '../../components';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import api from '../../utils/api'

export default function LCSettingScreen() {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectDay, setSelectDay] = useState("")

    const [firstDate, setFirstDate] = useState("");
    const [secondDate, setSecondDate] = useState("");
    const [thirdDate, setThirdDate] = useState("");
    const [firstLC, setFirstLC] = useState("");
    const [secondLC, setSecondLC] = useState("");
    const [thirdLC, setThirdLC] = useState("");

    const showDatePicker = (selectDay) => {
        setDatePickerVisibility(true);
        setSelectDay(selectDay);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        hideDatePicker()
        if (selectDay === '1') setFirstDate(date.format("yyyy/MM/dd"))
        else if (selectDay === '2') setSecondDate(date.format("yyyy/MM/dd"))
        else setThirdDate(date.format("yyyy/MM/dd"))
    }

    function dateFormatter(date) {
        const schedule = new Date(date)
        return schedule.getFullYear() + '/' + (schedule.getMonth()+1) + '/' + schedule.getDate()
    }

    async function updateLC (name, schedule) {
        const data = {
            name: name,
            schedule: schedule
        }
        try {
            await api.updateLC(data)
        } catch(err) {
        }
    }

    async function getLCList() {
        try {
            const res = await api.getLC()
            const lcList = res.data.data
            if (lcList[0]) {
                setFirstLC(lcList[0].name)
                setFirstDate(dateFormatter(lcList[0].schedule))
            } 
            if (lcList[1]){
                setSecondLC(lcList[1].name)
                setSecondDate(dateFormatter(lcList[1].schedule))
            } 
            if (lcList[2]){
                setThirdLC(lcList[2].name)
                setThirdDate(dateFormatter(lcList[2].schedule))
            }   
        } catch(err) {
        }
    }

    useEffect(()=> {
        getLCList()
    }, [])

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
                            value={firstDate}
                            height={40}
                            pointerEvents="none"
                            style={{width: 120}}
                        />
                    </TouchableOpacity>
                </View>
                <GreenButton
                    text='저장' 
                    viewStyle={{
                        width:'100%', 
                        flex: 1, 
                        alignItems: 'flex-end'
                    }}
                    press={()=>updateLC(firstLC, firstDate)}
                />

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
                            value={secondDate}
                            height={40}
                            pointerEvents="none"
                            style={{width: 120}}
                        />
                    </TouchableOpacity>
                </View>
                <GreenButton
                    text='저장' 
                    viewStyle={{
                        width:'100%', 
                        flex: 1, 
                        alignItems: 'flex-end'
                    }}
                    press={() => updateLC(secondLC, secondDate)}
                />

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
                            value={thirdDate}
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
                    press={() => updateLC(thirdLC, thirdDate)}
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