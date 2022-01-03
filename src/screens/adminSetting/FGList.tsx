import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Header, InputForm, PaperTable } from '../../components';
import { Colors } from '../../constants';
import Icon from 'react-native-vector-icons/Ionicons';

export default function FGListScreen() {
    const tableHeader= ['#', '이름', '학번', 'LC1', 'LC2', 'LC3']
    const fgInfo = [
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
    const [tableData, updateTableData] = React.useState(fgInfo)

    return(
        <ScrollView>
                <View style={styles.header}>
                    <Header title='FG List' marginBottom={0}/>
                    <View style={styles.searchBar}>
                        <InputForm
                            style={{width: '80%'}}
                            height={35}
                        />
                        <Icon
                            style={styles.inputIcon}
                            name="search-outline"
                            color={Colors.light}
                            size={18}
                        />
                    </View>
                </View>

                <PaperTable
                    header={tableHeader}
                    data={tableData}
                />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
        paddingTop: '10%',
        paddingRight: '10%',
        paddingLeft: '10%'
    },
    searchBar: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    inputIcon: {
        position: 'absolute',
        paddingRight: 10
    },
});