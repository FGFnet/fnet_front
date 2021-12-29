import React, {Component} from 'react';
import {View, Image, StyleSheet, ScrollView, Pressable} from 'react-native';
import {Text, Divider, Button, List} from 'react-native-paper';
import {Colors} from '../../constants';
import { basicStyles } from '../../components';
import {useNavigation} from '../../providers'

export default function NoticeScreen() {
    const navigation = useNavigation();

    return(
        <ScrollView>
            <View style={basicStyles.container}>
                <View style={styles.header}>
                    <View style={{flex: 1, alignItems: 'flex-start'}}>
                        <Text style={[basicStyles.titleText, {fontSize: 22}]}> 공지사항 </Text>
                    </View>
                    <Button uppercase={false} onPress={()=>navigation.navigate('NoticeCreate')}>
                        <Text style={[basicStyles.titleText, {textAlign: 'right'}]}> +new </Text>
                    </Button>
                </View>

                <Divider/>

                <View style={styles.notice_container}>
                    <Pressable 
                        style={styles.notice}
                        onPress={()=>navigation.navigate('NoticeDetail')}    
                    >
                        <Text style={styles.notice_title}>공지합니다 하나 둘</Text>
                        <Text style={styles.notice_date}>3분전</Text>
                    </Pressable>
                    <Pressable 
                        style={styles.notice}
                        onPress={()=>navigation.navigate('NoticeDetail')}    
                    >
                        <Text style={styles.notice_title}>공지합니다 하나 둘</Text>
                        <Text style={styles.notice_date}>3분전</Text>
                    </Pressable>
                    <Pressable 
                        style={styles.notice}
                        onPress={()=>navigation.navigate('NoticeDetail')}    
                    >
                        <Text style={styles.notice_title}>공지합니다 하나 둘</Text>
                        <Text style={styles.notice_date}>3분전</Text>
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
        paddingTop: 40,
    },
    notice_container: {
        padding: 20
    },
    notice: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'space-between'
    },
    notice_title:{
        fontSize: 16,
        color: Colors.darker,
        fontWeight: 'bold',
    },
    notice_date:{
        textAlign: 'right',
        color: Colors.light,
        fontSize: 16,
    }
});