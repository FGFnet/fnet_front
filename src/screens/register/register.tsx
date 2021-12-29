import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Text, Divider, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {basicStyles} from '../../components/basic_styles'
import { Colors } from '../../constants';
import PaperTable from './paperTable';

export default function RegisterScreen() {
    const tableHeader = ['#', '이름', '전화번호', 'LC', '접수']

    //TODO: API로 받아오기
    const userInfo = [
        {'id': 1, 'name': '김학산', 'phoneNumber': '8213', 'LC': 'LC10', 'registered': true},
        {'id': 2, 'name': '김학산', 'phoneNumber': '9999', 'LC': 'LC11', 'registered': false},
        {'id': 3, 'name': '김학산', 'phoneNumber': '1234', 'LC': 'LC11', 'registered': true},
        {'id': 4, 'name': '김학산', 'phoneNumber': '2222', 'LC': 'LC16', 'registered': true},
        {'id': 5, 'name': '김학산', 'phoneNumber': '9874', 'LC': 'LC10', 'registered': true},
        {'id': 6, 'name': '김학산', 'phoneNumber': '2351', 'LC': 'LC14', 'registered': false},
        {'id': 7, 'name': '김학산', 'phoneNumber': '8442', 'LC': 'LC10', 'registered': false},
        {'id': 8, 'name': '김학산', 'phoneNumber': '9982', 'LC': 'LC11', 'registered': true},
        {'id': 9, 'name': '김학산', 'phoneNumber': '9111', 'LC': 'LC11', 'registered': true},
        {'id': 10, 'name': '김학산', 'phoneNumber': '5555', 'LC': 'LC11', 'registered': false}
    ]

    const checkboxKey = 'registered'
    const [tableData, updateTableData] = React.useState(userInfo)
    const [searchData, setSearchData] = React.useState(userInfo)
    const [searchQuery, setSearchQuery] = React.useState('')

    const onChangeSearch = (query) => {
        setSearchQuery(query)
        const searchResult = []
        searchData.forEach((value) => {
            for (var key in value) {
                if (value[key].toString().search(query) !== -1) {
                    const data = Object.assign({}, value)
                    searchResult.push(data)
                    break
                }
            }
        })
        updateTableData(searchResult)
    }

    
    function Register (id) {
        //TODO: Register 상태 업데이트 API 호출(param: id)
        const newData = []
        tableData.forEach((value) => {
            const data = Object.assign({}, value)
            if (value['id'] === id) {
                data[checkboxKey] = !data[checkboxKey]
            }
            newData.push(data)
        })

        //TODO: 최선...?
        const newSearchData = []
        searchData.forEach((value) => {
            const data = Object.assign({}, value)
            if (value['id'] === id) {
                data[checkboxKey] = !data[checkboxKey]
            }
            newSearchData.push(data)
        })
        updateTableData(newData)
        setSearchData(newSearchData)
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.header__title}>
                    <Text style={basicStyles.titleText}>접수</Text>
                </View>
                <View style={styles.header__search_bar}>
                    <TextInput
                        style={styles.input}
                        value={searchQuery}
                        onChangeText={onChangeSearch}
                        underlineColorAndroid="transparent"
                    >
                    </TextInput>
                    <Icon
                        style={styles.input__icon}
                        name="search-outline"
                        color={Colors.light}
                        size={18}
                    >
                    </Icon>
                </View>
            </View>
            <Divider style={{marginBottom: 16}}/>
            <View style={styles.body}>
                <PaperTable
                    header={tableHeader}
                    data={tableData}
                    checkboxKey={checkboxKey}
                    toggleFunc={Register}
                />
            </View>   
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    header__title: {
        flex: 1.5,
        marginTop: 50,
        alignItems: 'center',
    },
    header__search_bar: {
        flex: 3,
        marginTop: 40,
        alignItems: 'center',
        flexDirection: 'row',
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
    input__icon: {
        position: 'absolute',
        left: 195
    },
    body: {
        flex: 5
    },
    row: {
        borderBottomWidth: 0
    }
});