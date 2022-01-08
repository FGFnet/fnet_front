import React from 'react';
import {ScrollView, Platform, StyleSheet} from 'react-native';
import {DataTable, IconButton} from 'react-native-paper';
import {basicStyles} from './basic_styles';
import Icon from 'react-native-vector-icons/Ionicons';

export default function PaperTable(props) {
  var data = props.data
  var checkboxKey = props.checkboxKey
  var tableStyle = ('tableStyle' in props) ? props.tableStyle : basicStyles.paperTable
  var header = ('header' in props) ? Object.keys(props.header) :
              (data === undefined) ? null : Object.keys(data[0])
  if (header === null) return null

  var tableHeader = header.map((title) => 
    <DataTable.Title key={title} style={{justifyContent: 'center'}}>
      {title}
    </DataTable.Title>
  )

  //TODO: No data 출력하도록 변경
  if (data.length === 0) {
    return (
      <DataTable style={tableStyle}>
        <DataTable.Header>
          {tableHeader}
        </DataTable.Header>
      </DataTable>
    )
  }

  var tableBody = data.map((val) => 
    <DataTable.Row key={val['id']}>
      {
        Object.values(props.header).map((title) =>
          <DataTable.Cell key={title} style={{justifyContent: 'center'}}>
            {
              checkboxKey === title ? 
                (Platform.OS === "ios" ? 
                  <Icon 
                    size={18}
                    name={val[title] ? 
                    "heart-outline" : "heart-dislike-outline"}
                    onPress={() => props.toggleFunc(val['id'])}
                  >
                  </Icon> : 
                  <IconButton 
                    size={18}
                    icon={val[title] ? 
                    "heart-outline" : "heart-dislike-outline"}
                    onPress={() => props.toggleFunc(val['id'])}
                  ></IconButton>
                ) :
              title in val ? val[title] : null
            }
          </DataTable.Cell>
        )
      }
    </DataTable.Row>
  )

  return (
    <DataTable style={tableStyle}>
      <DataTable.Header>
        {tableHeader}
      </DataTable.Header>
      <ScrollView nestedScrollEnabled = {true}>
        {tableBody}
      </ScrollView>
    </DataTable>
  )
}

const styles = StyleSheet.create({
  cell: {
    justifyContent: 'center'
  }
});