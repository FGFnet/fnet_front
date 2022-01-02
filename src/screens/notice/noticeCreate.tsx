import React from 'react';
import { View, StyleSheet, ScrollView,} from 'react-native';
import { Text,} from 'react-native-paper';
import { basicStyles, Header, InputForm, GreenButton,} from '../../components';

export default function NoticeCreateScreen() {
    function pressevent (){
        alert('press');
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
                    />
                </View>
                <View style={styles.content}>
                    <Text style={styles.label}>내용</Text>
                    <InputForm
                        style={{marginTop: 10}}
                        placeholder='contents'
                        multiline={true}
                        height= {200}
                    />
                </View>
                <GreenButton
                    text='등록'
                    press={pressevent}
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