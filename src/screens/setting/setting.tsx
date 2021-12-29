import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Divider, List } from 'react-native-paper';
import { Colors } from '../../constants'
import { basicStyles } from '../../components';
import {useNavigation} from '../../providers';

export default function SettingScreen() {
    const navigation = useNavigation();

    return(
        <ScrollView>
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <Text style={basicStyles.titleText}>설정</Text>
                </View>
                <Divider/>
                <List.Section style={styles.list}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('SetSchedule',{})
                        }}
                    >
                        <List.Item title="OT Schedule"
                            titleStyle={styles.list_item_title}
                            style={styles.list_item}
                            right={() => <List.Icon color={Colors.darker} icon="chevron-forward-outline" />}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('FGList',{})
                        }}
                    >
                        <List.Item title="FG List"
                            titleStyle={styles.list_item_title}
                            style={styles.list_item}
                            right={() => <List.Icon color={Colors.darker} icon="chevron-forward-outline" />}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('FreshmenList',{})
                        }}
                    >
                        <List.Item title="Freshmen List"
                            titleStyle={styles.list_item_title}
                            style={styles.list_item}
                            right={() => <List.Icon color={Colors.darker} icon="chevron-forward-outline" />}/>
                    </TouchableOpacity>
                </List.Section>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    header: {
        flex: 1,
        alignItems: 'flex-start',
        paddingTop: 40,
        paddingLeft: 40,
        paddingBottom: 20
    },
    list: {
        flex: 1,
        paddingHorizontal: 40
    },
    list_item: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.light
    },
    list_item_title: {
        fontSize: 14,
        color: Colors.darker
    }
});