import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { Header, InputForm, PaperTable } from '../../components';
import { Colors } from '../../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import api from '../../utils/api';

export default function FGListScreen() {
    const tableHeader= {'#': 'index', '이름': 'name', '학번': 'student_id', 'admin': 'admin'} // id를 인덱스로 변환
    const [tableData, updateTableData] = React.useState([])
    const [loading, setLoading] = useState(false)
    const [searchData, setSearchData] = React.useState([])
    const [searchQuery, setSearchQuery] = React.useState('')
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true)
                const res = await api.getFGList()
                updateTableData(res.data.data)
            } catch (err) {
            }
            setLoading(false)
        }
        fetchUsers()
    }, [])

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

    if (loading) return (<Text>로딩중..</Text>);
    return(
        <ScrollView>
            <View style={styles.header}>
                <Header title='FG List' marginBottom={0}/>
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