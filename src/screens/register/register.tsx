import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header, InputForm, PaperTable } from '../../components';
import {basicStyles} from '../../components/basic_styles'
import { Colors } from '../../constants';

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
        <ScrollView nestedScrollEnabled = {true}>
            <View style={basicStyles.container}>
                <View style={styles.header}>
                    <Header title='접수' marginBottom={0}/>
                    <View style={styles.searchBar}>
                        <InputForm
                            style={{width: '80%'}}
                            height={35}
                            value={searchQuery}
                            onChangeText={onChangeSearch}
                        />
                        <Icon
                            style={styles.inputIcon}
                            name="search-outline"
                            color={Colors.light}
                            size={18}
                        />
                    </View>
                </View>

                <View style={{width: '100%'}}>
                    <PaperTable
                        header={tableHeader}
                        data={tableData}
                        checkboxKey={checkboxKey}
                        toggleFunc={Register}
                    />
                </View>   
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30
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