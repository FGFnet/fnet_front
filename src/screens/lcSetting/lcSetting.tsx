import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Pressable, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import { basicStyles, GreenButton, Header, InputForm } from '../../components';
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function LCSettingScreen() {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectDay, setSelectDay] = useState("")

    const [firstDay, onChangeFirstDay] = useState("");
    const [secondDay, onChangeSecondDay] = useState("");
    const [thirdDay, onChangeThirdDay] = useState("");
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
        if (selectDay === '1') onChangeFirstDay(date.format("yyyy/MM/dd"))
        else if (selectDay === '2') onChangeSecondDay(date.format("yyyy/MM/dd"))
        else onChangeThirdDay(date.format("yyyy/MM/dd"))
    }

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
                            value={firstDay}
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
                            value={secondDay}
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
                            value={thirdDay}
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