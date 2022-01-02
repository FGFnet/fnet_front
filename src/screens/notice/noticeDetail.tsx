import React from 'react';
import {View, StyleSheet, ScrollView,} from 'react-native';
import {Text} from 'react-native-paper';
import { basicStyles, InputForm, GreenButton, StyledDivider } from '../../components';
import { Colors } from '../../constants';

export default function NoticeDetailScreen() {
    return(
        <View style={{flex:1}}>
            <View style={basicStyles.container}>
                {/* <Header title='공지사항'/>
                <StyledDivider/> */}
                <View style={basicStyles.insideContainer}>
                    <View style={styles.noticeTitle}>
                        <Text style={styles.noticeTitleText}>중간 조퇴자 조사</Text>
                        <Text style={basicStyles.lightText}>3분전</Text>
                    </View>
                    <View style={styles.noticeContent}>
                        <Text style={basicStyles.contentText}>중간 조퇴자 여부를 조사해서</Text>
                        <Text style={basicStyles.contentText}>인원수 / 강의실 번호 / 시간</Text>
                        <Text style={basicStyles.contentText}>순서대로 댓글 남겨주세요.</Text>
                    </View>
                </View>
                <StyledDivider/>
                <ScrollView style={styles.comment} nestedScrollEnabled = {true}>
                    <View style={basicStyles.insideContainer}>
                        <View style={styles.commentHeader}>
                            <Text style={basicStyles.contentText}>김하늘 FG</Text>
                            <Text style={basicStyles.lightText}>3분전</Text>
                        </View>
                        <View style={styles.commentContent}>
                            <Text style={basicStyles.contentText}>1명 / 51206 / 12시</Text>
                        </View>
                    </View>
                    <StyledDivider/>
                    <View style={basicStyles.insideContainer}>
                        <View style={styles.commentHeader}>
                            <Text style={basicStyles.contentText}>이동우 FG</Text>
                            <Text style={basicStyles.lightText}>3분전</Text>
                        </View>
                        <View style={styles.commentContent}>
                            <Text style={basicStyles.contentText}>2명 / 51206 / 12시, 12시 30분</Text>
                        </View>
                    </View>
                    <StyledDivider/>
                    <View style={basicStyles.insideContainer}>
                        <View style={styles.commentHeader}>
                            <Text style={basicStyles.contentText}>이동우 FG</Text>
                            <Text style={basicStyles.lightText}>3분전</Text>
                        </View>
                        <View style={styles.commentContent}>
                            <Text style={basicStyles.contentText}>2명 / 51206 / 12시, 12시 30분</Text>
                        </View>
                    </View>
                    <StyledDivider/>
                    <View style={basicStyles.insideContainer}>
                        <View style={styles.commentHeader}>
                            <Text style={basicStyles.contentText}>이동우 FG</Text>
                            <Text style={basicStyles.lightText}>3분전</Text>
                        </View>
                        <View style={styles.commentContent}>
                            <Text style={basicStyles.contentText}>2명 / 51206 / 12시, 12시 30분</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.commentInput}>
                    <InputForm
                        style={styles.commentInputForm}
                        multiline={true}
                        height={40}
                    />
                    <GreenButton
                        text='입력'
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    noticeTitle: {
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    noticeTitleText: {
        backgroundColor: Colors.primary_lighter,
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 5,
        paddingRight: 14,
    },
    noticeContent: {
        padding: 10
    },
    comment: {
        width: '100%',
    },
    commentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    commentContent: {

    },
    commentInput: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        absolute: 'static',
        bottom: 0
    },
    commentInputForm: {
        width: '75%',
    },
    time: {
        color: Colors.light
    },
    checkbox: {

    }
});