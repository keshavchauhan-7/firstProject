import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';



const ReactVectorIcons = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <Text style={{ color: 'white', margin: 10, fontSize: 20 }}>Gmail</Text>

        <View style={{height:0.4, backgroundColor: '#fff'}}></View>
        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, marginTop:20, marginBottom:20 }}>
          <MaterialCommunityIcons name="inbox" size={20} color="#fff" />
          <Text style={styles.name}>All inboxes</Text>
        </View>
        <View style={{height:0.4, backgroundColor: '#fff'}}></View>


        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
          <Icon name="inbox" size={20} color="#fff" />
          <Text style={styles.name}>Primary</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
          <AntDesign name="setting" size={20} color="#fff" />
          <Text style={styles.name}>Settings</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
          <Icon name="inbox" size={20} color="#fff" />
          <Text style={styles.name}>Social</Text>  
        </View>

        <Text style={{marginLeft:10, marginTop:20, fontSize:12, color:'#fff'}}>All labels</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
          <Icon name="star-o" size={20} color="#fff" />
          <Text style={styles.name}>Starred</Text>
        </View>


        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
          <MaterialCommunityIcons name="alarm-snooze" size={20} color="#fff" />
          <Text style={styles.name}>Snoozed</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
          <MaterialIcons name="label-important-outline" size={20} color="#fff" />
          <Text style={styles.name}>Important</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
          <Ionicons name="send-outline" size={20} color="#fff" />
          <Text style={styles.name}>Sent</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
          <MaterialIcons name="schedule-send" size={20} color="#fff" />
          <Text style={styles.name}>Scheduled</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
          <MaterialCommunityIcons name="send-circle-outline" size={20} color="#fff" />
          <Text style={styles.name}>Outbox</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
          <MaterialIcons name="drafts" size={20} color="#fff" />
          <Text style={styles.name}>Drafts</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
          <MaterialCommunityIcons name="email-multiple-outline" size={20} color="#fff" />
          <Text style={styles.name}>All mail</Text>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sidebar: {
    width: '60%',
    height: '100%',
    backgroundColor: '#404040'
  },
  name:{
    color:'#fff',
    marginLeft:20
  }
})

export default ReactVectorIcons