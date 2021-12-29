import React from 'react';
import { View, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Text, Divider, Button } from 'react-native-paper';
import { Colors } from '../../constants'
import { basicStyles } from '../../components';

export default function NoticeCreateScreen() {
    return(
        <ScrollView>
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <Text style={basicStyles.titleText}>공지사항 작성</Text>
                </View>
                <Divider/>
                <View style={styles.title}>
                    <Text style={styles.label}>제목</Text>
                    <TextInput
                        style={styles.title_input}
                        placeholder='title'
                    />
                </View>
                <View style={styles.content}>
                    <Text style={styles.label}>내용</Text>
                    <TextInput
                        style={styles.content_input}
                        multiline={true}
                        placeholder='contents'
                        textAlignVertical='top'
                    />
                </View>
                <Button
                    style={styles.button}
                    labelStyle={styles.button_text}
                >
                    등록
                </Button>
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
    title: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
        paddingLeft: 40
    },
    title_input: {
        height: 37,
        width: 270,
        padding: 10,
        marginLeft: 20,
        borderWidth: 1,
        borderColor: Colors.primary_lighter,
        borderRadius: 4
    },
    content: {
        flex: 1,
        paddingTop: 20,
        paddingLeft: 40
    },
    content_input: {
        height: 350,
        width: 320,
        padding: 10,
        marginTop: 10,
        borderWidth: 1,
        borderColor: Colors.primary_lighter,
        borderRadius: 4
    },
    label: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.darker
    },
    button: {
        flex: 1,
        alignItems: 'flex-end',
        paddingRight: 45,
        paddingTop: 20
    },
    button_text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.black,
        backgroundColor: Colors.primary_lighter,
        paddingLeft: 5,
        paddingRight: 14
    }
});