import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import{Table,Row,Rows} from 'react-native-table-component';

const ReactTable = () => {

  const header = ['Username', 'Role', 'Date join'];
  const data = [
    ['John', 'Admin', '2020-01-01'],
    ['Jane', 'User', '2020-01-02'],
    ['Jack', 'Admin', '2020-01-03'],
  ]
  return (
    <View style={styles.container}>
      <Text style={{fontSize:24, textAlign:'center'}}> User List </Text>
      <Table borderStyle={{borderWidth:2, borderColor:'gray'}}>
        <Row data={header} textStyle={{textAlign:'center', color:'blue'}}/>
        <Rows data={data} textStyle={{textAlign:'center', color:'blue'}}/>
      </Table>
    </View>
  );

};

const styles = StyleSheet.create({
container:{
  flex:1,
  padding:20,
  backgroundColor:'#fff',
  justifyContent:'center'
}
})


export default ReactTable;