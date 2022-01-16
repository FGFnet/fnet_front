import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity  } from 'react-native';
import { Header, InputForm, PaperTable } from '../../components';
import { Colors } from '../../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import api from '../../utils/api';
import DocumentPicker from 'react-native-document-picker'
import axios from 'axios'

export default function FGListScreen() {
    const tableHeader= {'#': 'index', '이름': 'name', '학번': 'student_id', 'admin': 'admin'} // id를 인덱스로 변환
    const [tableData, updateTableData] = React.useState([])
    const [loading, setLoading] = useState(false)
    const [searchData, setSearchData] = React.useState([])
    const [searchQuery, setSearchQuery] = React.useState('')

    const [singleFile, setSingleFile] = useState(null);

    const uploadImage = async () => {
        if (singleFile != null) {
        // let res = await api.uploadFGList(
        //     singleFile
        // );
            const formData = new FormData();
            // let file = {
            //     uri: singleFile.uri,
            //     type: 'multipart/form-data',
            //     name: String(singleFile).split("/").pop()
            // }
            formData.append('file', singleFile)
            
            try {
                // const res = await axios({ url:'admin/fg/file', method: 'post', headers:{'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'Content-Disposition':'attachment; filename=upload.xlsx'}, data:singleFile})
                // console.log(formData)
                let res = await api.uploadFGFile(
                    formData
                );
                if (!res.data.error) {
                    alert('Upload Successful');
                } else {
                alert('Please Select File first');
                }
            } catch (err) {
                console.log(err)
            }
        }
    };

    const selectFile = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });
            console.log('res : ' + JSON.stringify(res));
            setSingleFile(res);
        } catch (err) {
            setSingleFile(null);
            if (DocumentPicker.isCancel(err)) {
                alert('Canceled');
            } else {
                alert('Unknown Error: ' + JSON.stringify(err));
                throw err;
            }
        }
    };
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
            
            <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={selectFile}>
                <Text style={styles.buttonTextStyle}>Select FG List (Excel)</Text>
            </TouchableOpacity>
            {singleFile != null ? (
                <Text style={styles.textStyle}>
                    Name: {singleFile.name ? singleFile.name : ''}
                </Text>
            ) : null}
            <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={uploadImage}>
                <Text style={styles.buttonTextStyle}>Upload Selected File</Text>
            </TouchableOpacity>
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
    textStyle: {
        backgroundColor: '#fff',
        fontSize: 15,
        marginTop: 16,
        marginLeft: 35,
        marginRight: 35,
        textAlign: 'center',
        color: Colors.primary
    },
    buttonStyle: {
        backgroundColor: Colors.primary,
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: Colors.primary,
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 15,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
    },
});