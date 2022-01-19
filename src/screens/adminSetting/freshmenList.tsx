import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { InputForm, Header, PaperTable, GreenButton, basicStyles } from '../../components';
import { Colors } from '../../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import DocumentPicker from 'react-native-document-picker'
import api from '../../utils/api';

export default function FreshmenListScreen() {
    const tableHeader= {'#': 'index', '이름': 'name', '전화번호': 'phone_number', 'LC': 'lc', '계열': 'department'}
    const [tableData, updateTableData] = React.useState([])
    const [loading, setLoading] = useState(false)
    const [searchQuery, setSearchQuery] = React.useState('')
    const [singleFile, setSingleFile] = useState(null);

    const [startLC, setStartLC] = useState('')
    const [endLC, setEndLC] = useState('')

    const fetchUsers = async () => {
        try {
            setLoading(true)
            const res = await api.getFreshmanList()
            updateTableData(res.data.data)
        } catch (err) {
            alert(err)
        }
        setLoading(false)
    }

    const uploadFile = async () => {
        if (singleFile != null) {
            const formData = new FormData();
            let file = {
                uri: singleFile.uri,
                type: 'multipart/form-data',
                name: String(singleFile).split("/").pop()
            }
            formData.append('file', file)
            
            setLoading(true)
            try {
                const res = await api.uploadFreshman(
                    formData
                );
                if (!res.data.error) {
                    alert('Upload Successful');
                    setSingleFile(null)
                    await fetchUsers()
                }
            } catch (err) {
                alert(err)
            } finally {
                setLoading(false)
            }
        } else {
            alert("No file selected")
        }
    }

    const selectFile = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });
            setSingleFile(res[0]);
        } catch (err) {
            setSingleFile(null);
            if (DocumentPicker.isCancel(err)) {
                alert('Canceled');
            } else {
                alert('Unknown Error: ' + JSON.stringify(err));
                throw err;
            }
        }
    }

    const createLC = async() => {
        const data = {
            start: Number(startLC),
            end: Number(endLC)
        }
        try{
            const res = await api.createLC(data)
            if(res.data.error === false) {
                alert("저장되었습니다")
            }
        } catch(err){

        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    const onChangeSearch = (query) => {
        setSearchQuery(query)
    }

    async function onSubmit () { // search by freshman name
        try {
            setLoading(true)
            const res = await api.searchFreshman(searchQuery)
            updateTableData(res.data.data)
        } catch (err) {
            alert(err)
        }
        setLoading(false)
    }

    return(
        <ScrollView nestedScrollEnabled = {true}>
            <View style={styles.header}>
                <Header title='Freshmen List' marginBottom={0}/>
                <View style={styles.searchBar}>
                    <InputForm
                        style={{width: '80%'}}
                        height={35}
                        value={searchQuery}
                        onChangeText={onChangeSearch}
                        multiline={false}
                        onSubmitEditing={onSubmit}
                        placeholder='이름'
                    />
                    <Icon
                        style={styles.inputIcon}
                        name="search-outline"
                        color={Colors.light}
                        size={18}
                    />
                </View>
            </View>

            <View style={basicStyles.insideRowContainer}>
                <Text style={{paddingRight: 20}}>LC번호</Text>
                <InputForm
                    placeholder='시작번호'
                    height={40}
                    style={{width: '40%', paddingRight: 20}}
                    value={startLC}
                    onChangeText={text=>setStartLC(text)}
                />
                <InputForm
                    placeholder='끝번호'
                    height={40}
                    style={{width: '40%', paddingRight: 20}}
                    value={endLC}
                    onChangeText={text=> setEndLC(text)}
                />
            </View>
            <GreenButton
                text='저장' 
                viewStyle={{
                    width:'100%', 
                    flex: 1, 
                    alignItems: 'flex-end'
                }}
                press={()=>createLC()}
            />

            <PaperTable
                header={tableHeader}
                data={tableData}
                loading={loading}
            />

            <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={selectFile}>
                <Text style={styles.buttonTextStyle}>Select Freshmen List (Excel)</Text>
            </TouchableOpacity>
            {singleFile != null ? (
                <Text style={styles.textStyle}>
                    File: {singleFile.name ? singleFile.name : ''}
                </Text>
            ) : null}
            <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={uploadFile}>
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
