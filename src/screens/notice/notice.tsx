import React, {Component} from 'react';
import {View, Image, StyleSheet, ScrollView} from 'react-native';
import {Text, Divider, Button, List} from 'react-native-paper';
import {Colors} from '../../constants';
import { basicStyles } from '../../components';

export default function NoticeScreen() {
    return(
        <ScrollView>
            <View style={basicStyles.container}>
                <View style={styles.header}>
                    <View style={{flex: 1, alignItems: 'flex-start'}}>
                        <Text style={[basicStyles.titleText, {fontSize: 22}]}> 공지사항 </Text>
                    </View>
                    <Button>
                        <Text style={[basicStyles.titleText, {textAlign: 'right'}]}> +new </Text>
                    </Button>
                </View>

                <Divider/>

                <View style={basicStyles.insideRowContainer}>
                    <View style={styles.notice_title}>
                        <Text style={styles.title_text}>
                                공지합니다 하나 둘
                        </Text>
                        <Text style={styles.title_text}>
                                조사합니다 하나 둘
                        </Text>
                        <Text style={styles.title_text}>
                                문제있습니까 하나 둘
                        </Text>
                    </View>
                    <View style={styles.notice_date}>
                        <Text style={styles.date_text}>
                            3분전
                        </Text>
                        <Text style={styles.date_text}>
                            30분전
                        </Text>
                        <Text style={styles.date_text}>
                            3시간전
                        </Text>
                    </View>
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
    notice_title:{
        flex: 2
    },
    notice_date:{
        flex: 1
    },
    title_text: {
        fontSize: 16,
        color: Colors.darker,
        fontWeight: 'bold',
        marginBottom: 20
    },
    date_text:{
        textAlign: 'right',
        color: Colors.light,
        fontSize: 16,
        marginBottom: 20
    }
});