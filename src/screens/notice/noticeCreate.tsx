import React, {useState} from 'react';
import { View, StyleSheet, ScrollView,} from 'react-native';
import { Text,} from 'react-native-paper';
import { basicStyles, Header, InputForm, GreenButton,} from '../../components';
import {useNavigation} from '../../providers'
import api from '../../utils/api'

export default function NoticeCreateScreen() {
    const navigation = useNavigation()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    async function createNotice () {
        const data = {
            title: title,
            content: content
        }
        try {
            await api.createNotice(data)
            alert('등록되었습니다.')
            navigation.navigate('Notice')
        } catch (err) {
            alert(err)
        }
    }

    return(
        <ScrollView>
            <View style={basicStyles.container}>
                <Header title='공지사항 작성'/>
                <View style={styles.title}>
                    <Text style={styles.label}>제목</Text>
                    <InputForm
                        style={{width: '85%'}}
                        placeholder='title'
                        multiline={false}
                        height= {40}
                        onChangeText={(text) => setTitle(text)}
                    />
                </View>
                <View style={styles.content}>
                    <Text style={styles.label}>내용</Text>
                    <InputForm
                        style={{marginTop: 10}}
                        placeholder='contents'
                        multiline={true}
                        height= {200}
                        onChangeText={(text) => setContent(text)}
                    />
                </View>
                <GreenButton
                    text='등록'
                    press={createNotice}
                    viewStyle={{
                        paddingTop: 30,
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
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    content: {
        width: '100%',
        marginTop: 20,
    },
    label: {
        flex:1,
        fontSize: 15,
        fontWeight: 'bold',
    },
});