import React from 'react';
import {View, StyleSheet, ScrollView, ImageBackground} from 'react-native';
import {Text, DataTable} from 'react-native-paper';
import { basicStyles, Header, StyledDivider } from '../../components';

export default function RegisterListScreen() {
    return(
        <ScrollView nestedScrollEnabled = {true}>
            <View style={basicStyles.container}>
                <Header title='접수 현황'/>
                <StyledDivider/>
                <View style={styles.body}>
                    <View style={styles.insideRowContainer}>
                        <ImageBackground
                            style={styles.lcNum}
                            source={require('../../images/register_list__ellipse.png')}
                        >
                            <Text style={{fontWeight: 'bold', fontSize: 17}}> LC 09 </Text>
                        </ImageBackground>
                        <View style={styles.registeredNumContainer}>
                            <View style={[styles.registeredNum, {paddingBottom: 5}]}>
                                <Text style={{fontWeight: 'bold'}}> 전체 접수 인원 </Text>
                                <Text style={{fontWeight: 'bold'}}> 15 </Text>
                            </View>
                            <View style={styles.registeredNum}>
                                <Text> 인사캠 접수 인원 </Text>
                                <Text> 6 </Text>
                            </View>
                            <View style={styles.registeredNum}>
                                <Text> 자과캠 접수 인원 </Text>
                                <Text> 9 </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <StyledDivider/>
                <ScrollView nestedScrollEnabled = {true} horizontal={true} contentContainerStyle={styles.table}>
                    <DataTable style={styles.table}>
                        <DataTable.Header>
                            <DataTable.Title>#</DataTable.Title>
                            <DataTable.Title>이름</DataTable.Title>
                            <DataTable.Title>성별</DataTable.Title>
                            <DataTable.Title>계열</DataTable.Title>
                            <DataTable.Title numeric>접수 여부</DataTable.Title>
                        </DataTable.Header>
                        <ScrollView nestedScrollEnabled = {true}>
                            <DataTable.Row>
                                <DataTable.Cell>1</DataTable.Cell>
                                <DataTable.Cell>박민서</DataTable.Cell>
                                <DataTable.Cell>여</DataTable.Cell>
                                <DataTable.Cell>자연과학</DataTable.Cell>
                                <DataTable.Cell numeric>O</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>2</DataTable.Cell>
                                <DataTable.Cell>하솔비</DataTable.Cell>
                                <DataTable.Cell>여</DataTable.Cell>
                                <DataTable.Cell>자연과학</DataTable.Cell>
                                <DataTable.Cell numeric>X</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>3</DataTable.Cell>
                                <DataTable.Cell>김학산</DataTable.Cell>
                                <DataTable.Cell>남</DataTable.Cell>
                                <DataTable.Cell>전전컴</DataTable.Cell>
                                <DataTable.Cell numeric>X</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>4</DataTable.Cell>
                                <DataTable.Cell>구성현</DataTable.Cell>
                                <DataTable.Cell>여</DataTable.Cell>
                                <DataTable.Cell>자연과학</DataTable.Cell>
                                <DataTable.Cell numeric>O</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>5</DataTable.Cell>
                                <DataTable.Cell>고양이</DataTable.Cell>
                                <DataTable.Cell>중성</DataTable.Cell>
                                <DataTable.Cell>먀아아옹</DataTable.Cell>
                                <DataTable.Cell numeric>X</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>6</DataTable.Cell>
                                <DataTable.Cell>고양이</DataTable.Cell>
                                <DataTable.Cell>중성</DataTable.Cell>
                                <DataTable.Cell>먀아아옹</DataTable.Cell>
                                <DataTable.Cell numeric>X</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>7</DataTable.Cell>
                                <DataTable.Cell>고양이</DataTable.Cell>
                                <DataTable.Cell>중성</DataTable.Cell>
                                <DataTable.Cell>먀아아옹</DataTable.Cell>
                                <DataTable.Cell numeric>X</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>8</DataTable.Cell>
                                <DataTable.Cell>고양이</DataTable.Cell>
                                <DataTable.Cell>중성</DataTable.Cell>
                                <DataTable.Cell>먀아아옹</DataTable.Cell>
                                <DataTable.Cell numeric>X</DataTable.Cell>
                            </DataTable.Row>
                        </ScrollView>
                    </DataTable>
                </ScrollView>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        alignItems: 'center',
        width: '100%',
        padding: '5%',
    },
    insideRowContainer: {
        flexDirection: 'row',
    },
    lcNum: {
        height: 67.64,
        width: 93.87,
        justifyContent: 'center',
        alignItems: 'center',
    },
    registeredNumContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 30,
        minHeight: 67.64
    },
    registeredNum: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    table: {
        width: '100%',
    }
});