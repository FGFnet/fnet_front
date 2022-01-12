import React, { useState, useEffect } from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header, InputForm, PaperTable } from '../../components';
import {basicStyles} from '../../components/basic_styles'
import { Colors } from '../../constants';
import api from '../../utils/api';

export default function RegisterScreen() {
    const checkboxKey = 'register'
    const [tableData, updateTableData] = React.useState([])
    const [searchData, setSearchData] = React.useState([])
    const [searchQuery, setSearchQuery] = React.useState('')
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true)
                const res = await api.getFreshmanList()
                updateTableData(res.data.data)
                setSearchData(res.data.data)
            } catch (err) {
            }
            setLoading(false)
        };
        fetchUsers();
    }, []);

    const tableHeader = {'#': 'index', 
                        '이름': 'name', 
                        '전화번호': 'phone_number', 
                        'LC': 'lc', 
                        '접수': 'register'}

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
                        loading={loading}
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