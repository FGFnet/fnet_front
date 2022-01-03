import React from 'react';
import {View, StyleSheet, ScrollView, ImageBackground} from 'react-native';
import {Text} from 'react-native-paper';
import { basicStyles, Header, PaperTable, StyledDivider } from '../../components';

export default function RegisterListScreen() {
    const tableHeader = ['#', '이름', '성별', '계열', '접수 여부']
    const lcList = [
        {'id': '1', 'name': '박민서', 'sex': '여', 'department': '자연과학', 'register': 'O'},
        {'id': '2', 'name': '하솔비', 'sex': '여', 'department': '자연과학', 'register': 'X'},
        {'id': '3', 'name': '김학산', 'sex': '여', 'department': '전전컴', 'register': 'X'},
        {'id': '4', 'name': '구성현', 'sex': '여', 'department': '자연과학', 'register': 'O'},
        {'id': '5', 'name': '하지민', 'sex': '여', 'department': '공학', 'register': 'O'},
        {'id': '6', 'name': '고양이', 'sex': '여', 'department': '사회과학', 'register': 'X'},
        {'id': '7', 'name': '고양이', 'sex': '여', 'department': '인문사회', 'register': 'X'},
        {'id': '8', 'name': '고양이', 'sex': '여', 'department': '자연과학', 'register': 'X'},
        {'id': '9', 'name': '고양이', 'sex': '여', 'department': '자연과학', 'register': 'X'},
        {'id': '10', 'name': '고양이', 'sex': '여', 'department': '자연과학', 'register': 'X'},
        {'id': '11', 'name': '고양이', 'sex': '여', 'department': '자연과학', 'register': 'X'}
    ]
    const [tableData, updateTableData] = React.useState(lcList)

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
                <PaperTable
                    header={tableHeader}
                    data={tableData}
                />
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