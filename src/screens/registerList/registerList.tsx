import React, {Component} from 'react';
import {View, Image, StyleSheet, ScrollView, ImageBackground} from 'react-native';
import {Text, Divider, Button, DataTable} from 'react-native-paper';
import {Colors} from '../../constants';
import { basicStyles } from '../../components';

export default function RegisterListScreen() {
    return(
        <View style={basicStyles.container}>
            <View style={styles.header}>
                <Text style={styles.header__title}>접수 현황</Text>
            </View>
            <Divider style={{ width:'100%', height:0.5, marginBottom: 10}}/>
            <View style={styles.body}>
                <View style={styles.insideRowContainer}>
                    <ImageBackground
                        style={styles.body__lc_num}
                        source={require('../../images/register_list__ellipse.png')}
                    >
                        <Text style={{fontWeight: 'bold', fontSize: 17}}> LC 09 </Text>
                    </ImageBackground>
                    <View style={styles.body__registered_num_wrapper}>
                        <View style={[styles.body__registered_num, {paddingBottom: 5}]}>
                            <Text style={{fontWeight: 'bold'}}> 전체 접수 인원 </Text>
                            <Text style={{fontWeight: 'bold'}}> 15 </Text>
                        </View>
                        <View style={styles.body__registered_num}>
                            <Text> 인사캠 접수 인원 </Text>
                            <Text> 6 </Text>
                        </View>
                        <View style={styles.body__registered_num}>
                            <Text> 자과캠 접수 인원 </Text>
                            <Text> 9 </Text>
                        </View>
                    </View>
                </View>
            </View>
            <Divider style={{ width:'100%', height:0.5, marginBottom: 10}}/>
            <ScrollView horizontal={true} contentContainerStyle={styles.body}>
                <DataTable style={{height: 330}}>
                    <DataTable.Header>
                        <DataTable.Title>#</DataTable.Title>
                        <DataTable.Title>이름</DataTable.Title>
                        <DataTable.Title>성별</DataTable.Title>
                        <DataTable.Title>계열</DataTable.Title>
                        <DataTable.Title numeric>접수 여부</DataTable.Title>
                    </DataTable.Header>
                    <ScrollView>
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
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex:1,
    },
    header: {
        flex: 1,
        alignItems: 'flex-start',
        paddingTop: 60,
    },
    header__title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        backgroundColor: Colors.accent,
        paddingLeft: 5,
        paddingRight: 14
    },
    body: {
        flex: 2,
        overflow: 'scroll',
        alignItems: 'center',
    },
    insideRowContainer: {
        flexDirection: 'row',
        padding: 10,
    },
    body__lc_num: {
        height: 67.64,
        width: 93.87,
        justifyContent: 'center',
        alignItems: 'center',
    },
    body__registered_num_wrapper: {
        flexDirection: 'column',
        maxHeight: 67.64,
        paddingLeft: 30,
        flex: 1
    },
    body__registered_num: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});