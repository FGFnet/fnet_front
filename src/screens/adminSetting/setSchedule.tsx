import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Text, Divider } from 'react-native-paper';
import { Colors } from '../../constants'
import { basicStyles, StyledDivider, Header } from '../../components';
import DateTimePickerModal from "react-native-modal-datetime-picker";

Date.prototype.format = function(f) {
    if (!this.valueOf()) return " ";

    var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    var d = this;

    return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
        switch ($1) {
            case "yyyy": return d.getFullYear();
            case "yy": return (d.getFullYear() % 1000).zf(2);
            case "MM": return (d.getMonth() + 1).zf(2);
            case "dd": return d.getDate().zf(2);
            case "E": return weekName[d.getDay()];
            case "HH": return d.getHours().zf(2);
            case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
            case "mm": return d.getMinutes().zf(2);
            case "ss": return d.getSeconds().zf(2);
            case "a/p": return d.getHours() < 12 ? "오전" : "오후";
            default: return $1;
        }
    });
};

String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
Number.prototype.zf = function(len){return this.toString().zf(len);};


export default function SetScheduleScreen() {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [text, onChangeText] = useState("");

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        hideDatePicker();
        onChangeText(date.format("yyyy/MM/dd"));
    }

    return(
        <ScrollView>
            <View style={basicStyles.container}>
                <Header title='OT Schedule'/>
                <StyledDivider/>
                <View style={basicStyles.insideRowContainer}>
                    <Text style={styles.label}>첫째날</Text>
                    <TouchableOpacity onPress={showDatePicker}>
                        <TextInput
                            style={styles.input}
                            pointerEvents="none"
                            placeholder="날짜를 선택하세요."
                            editable={false}
                            value={text}
                        />
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                    </TouchableOpacity>
                </View>
                <View style={basicStyles.insideRowContainer}>
                    <Text style={styles.label}>둘째날</Text>
                    <TouchableOpacity onPress={showDatePicker}>
                        <TextInput
                            style={styles.input}
                            pointerEvents="none"
                            placeholder="날짜를 선택하세요."
                            editable={false}
                            value={text}
                        />
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                    </TouchableOpacity>
                </View>
                <View style={basicStyles.insideRowContainer}>
                    <Text style={styles.label}>셋째날</Text>
                    <TouchableOpacity onPress={showDatePicker}>
                        <TextInput
                            style={styles.input}
                            pointerEvents="none"
                            placeholder="날짜를 선택하세요."
                            editable={false}
                            value={text}
                        />
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    header: {
        flex: 1,
        alignItems: 'flex-start',
        paddingTop: 40,
        paddingLeft: 40,
        paddingBottom: 20
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
        paddingLeft: 40
    },
    input: {
        height: 37,
        width: 250,
        padding: 10,
        marginLeft: 20,
        borderWidth: 1,
        borderColor: Colors.primary_lighter,
        borderRadius: 4
    },
    label: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.darker
    }
});