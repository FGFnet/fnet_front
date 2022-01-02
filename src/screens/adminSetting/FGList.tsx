import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Divider, DataTable, TextInput } from 'react-native-paper';
import { basicStyles, Header } from '../../components';
import { Colors } from '../../constants';
import Icon from 'react-native-vector-icons/Ionicons';

export default function FGListScreen() {
    const data = [
        {'id': 1, 'name': '박민서', 'studentId': 123123, 'LC1': 10, 'LC2': 20, 'LC3': 37},
        {'id': 2, 'name': '박민서', 'studentId': 123123, 'LC1': 10, 'LC2': 20, 'LC3': 37},
        {'id': 3, 'name': '박민서', 'studentId': 123123, 'LC1': 10, 'LC2': 20, 'LC3': 37},
        {'id': 4, 'name': '박민서', 'studentId': 123123, 'LC1': 10, 'LC2': 20, 'LC3': 37},
        {'id': 5, 'name': '박민서', 'studentId': 123123, 'LC1': 10, 'LC2': 20, 'LC3': 37},
        {'id': 6, 'name': '박민서', 'studentId': 123123, 'LC1': 10, 'LC2': 20, 'LC3': 37},
        {'id': 7, 'name': '박민서', 'studentId': 123123, 'LC1': 10, 'LC2': 20, 'LC3': 37},
        {'id': 8, 'name': '박민서', 'studentId': 123123, 'LC1': 10, 'LC2': 20, 'LC3': 37},
        {'id': 9, 'name': '박민서', 'studentId': 123123, 'LC1': 10, 'LC2': 20, 'LC3': 37},
        {'id': 10, 'name': '박민서', 'studentId': 123123, 'LC1': 10, 'LC2': 20, 'LC3': 37},
        {'id': 11, 'name': '박민서', 'studentId': 123123, 'LC1': 10, 'LC2': 20, 'LC3': 37}
    ]

    var tableBody = data.map((val) =>
        <DataTable.Row key={val['id']}>
            <DataTable.Cell key='name'>{val['name']}</DataTable.Cell>
            <DataTable.Cell key='studentId'>{val['studentId']}</DataTable.Cell>
            <DataTable.Cell key='LC1' numeric>{val['LC1']}</DataTable.Cell>
            <DataTable.Cell key='LC2' numeric>{val['LC2']}</DataTable.Cell>
            <DataTable.Cell key='LC3' numeric>{val['LC3']}</DataTable.Cell>
        </DataTable.Row>
  )

    return(
        <ScrollView>
            <View style={styles.header}>
                <Header title='FG List'/>
                <View style={styles.header_searchbar}>
                    <TextInput
                        style={styles.input}

                    />
                    <Icon
                        style={styles.input_icon}
                        name="search-outline"
                        color={Colors.light}
                        size={18}
                    >
                    </Icon>
                </View>
            </View>
            <Divider/>
            <View>
                <DataTable style={basicStyles.paperTable}>
                    <DataTable.Header>
                        <DataTable.Title>이름</DataTable.Title>
                        <DataTable.Title>학번</DataTable.Title>
                        <DataTable.Title numeric>LC1</DataTable.Title>
                        <DataTable.Title numeric>LC2</DataTable.Title>
                        <DataTable.Title numeric>LC3</DataTable.Title>
                    </DataTable.Header>
                    <ScrollView>
                        {tableBody}
                    </ScrollView>
                </DataTable>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 20
    },
    header: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom: 20
    },
    header_title: {

    },
    header_searchbar: {
        marginBottom: 10,
        marginLeft: 30
    },
    input: {
        width: 180,
        height: 28,
        marginLeft: 40,
        fontSize:12,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: Colors.dark,
        borderBottomEndRadius: 6,
        borderTopStartRadius: 6,
        borderBottomStartRadius: 6,
        borderTopEndRadius: 6
    },
    input_icon: {
        position: 'absolute',
        left: 195,
        top: 5
    }
});