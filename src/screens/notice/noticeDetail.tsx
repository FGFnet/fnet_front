import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text, Divider, Button, TextInput} from 'react-native-paper';
import { basicStyles } from '../../components';
import { Colors } from '../../constants';

export default function NoticeDetailScreen() {
    return(
        <View style={styles.wrapper}>
            <View style={basicStyles.container}>
                <View>
                    <Text style={basicStyles.titleText}>공지사항</Text>
                </View>
                <Divider/>
                <View style={basicStyles.insideContainer}>
                    <View style={styles.noticeTitle}>
                        <Text style={[basicStyles.titleText, styles.noticeTitleBack]}>중간 조퇴자 조사</Text>
                        <Text style={styles.time}>3분전</Text>
                    </View>
                    <View style={styles.noticeContent}>
                        <Text style={basicStyles.contentText}>중간 조퇴자 여부를 조사해서</Text>
                        <Text style={basicStyles.contentText}>인원수 / 강의실 번호 / 시간</Text>
                        <Text style={basicStyles.contentText}>순서대로 댓글 남겨주세요.</Text>
                    </View>
                </View>
                <Divider/>
                <ScrollView style={styles.comment}>
                    <View style={basicStyles.insideContainer}>
                        <View style={styles.commentHeader}>
                            <Text style={basicStyles.contentText}>김하늘 FG</Text>
                            <Text style={[basicStyles.contentText, styles.time]}>3분전</Text>
                        </View>
                        <View style={styles.commentContent}>
                            <Text style={basicStyles.contentText}>1명 / 51206 / 12시</Text>
                        </View>
                    </View>
                    <Divider/>
                    <View style={basicStyles.insideContainer}>
                        <View style={styles.commentHeader}>
                            <Text style={basicStyles.contentText}>이동우 FG</Text>
                            <Text style={[basicStyles.contentText, styles.time]}>3분전</Text>
                        </View>
                        <View style={styles.commentContent}>
                            <Text style={basicStyles.contentText}>2명 / 51206 / 12시, 12시 30분</Text>
                        </View>
                    </View>
                    <Divider/>
                    <View style={basicStyles.insideContainer}>
                        <View style={styles.commentHeader}>
                            <Text style={basicStyles.contentText}>이동우 FG</Text>
                            <Text style={[basicStyles.contentText, styles.time]}>3분전</Text>
                        </View>
                        <View style={styles.commentContent}>
                            <Text style={basicStyles.contentText}>2명 / 51206 / 12시, 12시 30분</Text>
                        </View>
                    </View>
                    <Divider/>
                    <View style={basicStyles.insideContainer}>
                        <View style={styles.commentHeader}>
                            <Text style={basicStyles.contentText}>이동우 FG</Text>
                            <Text style={[basicStyles.contentText, styles.time]}>3분전</Text>
                        </View>
                        <View style={styles.commentContent}>
                            <Text style={basicStyles.contentText}>2명 / 51206 / 12시, 12시 30분</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.commentInput}>
                    <TextInput
                        style={styles.commentInputForm}
                        placeholder="댓글을 입력하세요."
                        multiline={true}
                    />
                    <Button>입력</Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    noticeTitle: {
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'space-between',
        width: '100%'
    },
    noticeTitleBack: {
        backgroundColor: Colors.primary_lighter
    },
    noticeContent: {
        padding: 10
    },
    comment: {
        flex: 1,
        width: '100%'
    },
    commentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    commentContent: {

    },
    commentInput: {
        width: '100%',
        flexDirection: 'row'
    },
    commentInputForm: {
        width: '85%',
        height: 40
    },
    time: {
        color: Colors.light
    },
    checkbox: {

    }
});