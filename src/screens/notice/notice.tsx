import React from 'react';
import {View, StyleSheet, ScrollView, Pressable} from 'react-native';
import {Text} from 'react-native-paper';
import { basicStyles, GreenButton, Header } from '../../components';
import {useNavigation} from '../../providers'

export default function NoticeScreen() {
    const navigation = useNavigation();
    function navigate(){navigation.navigate('NoticeCreate')}

    return(
        <ScrollView>
            <View style={basicStyles.container}>
                <View style={styles.header}>
                    <Header title='공지사항'/>
                    <GreenButton text='+new' press={navigate}/>
                </View>

                <View style={styles.notice_container}>
                    <Pressable 
                        style={styles.notice}
                        onPress={()=>navigation.navigate('NoticeDetail')}    
                    >
                        <Text style={styles.notice_title}>공지합니다 하나 둘</Text>
                        <Text style={basicStyles.lightText}>3분전</Text>
                    </Pressable>
                    <Pressable 
                        style={styles.notice}
                        onPress={()=>navigation.navigate('NoticeDetail')}    
                    >
                        <Text style={styles.notice_title}>공지합니다 하나 둘</Text>
                        <Text style={basicStyles.lightText}>3분전</Text>
                    </Pressable>
                    <Pressable 
                        style={styles.notice}
                        onPress={()=>navigation.navigate('NoticeDetail')}    
                    >
                        <Text style={styles.notice_title}>공지합니다 하나 둘</Text>
                        <Text style={basicStyles.lightText}>3분전</Text>
                    </Pressable>
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