// // ==========                ==========
//               // Table 
// // ==========                ==========



// import React, {useState } from 'react'
// import { Text, StyleSheet, View } from 'react-native'
// import{Table,Row,Rows} from 'react-native-table-component';

// const App = () => {

//   const header = ['Username', 'Role', 'Date join'];
//   const data = [
//     ['John', 'Admin', '2020-01-01'],
//     ['Jane', 'User', '2020-01-02'],
//     ['Jack', 'Admin', '2020-01-03'],
//   ]
//   return (
//     <View style={styles.container}>
//       <Text style={{fontSize:24, textAlign:'center'}}> User List </Text>
//       <Table borderStyle={{borderWidth:2, borderColor:'gray'}}>
//         <Row data={header} textStyle={{textAlign:'center', color:'blue'}}/>
//         <Rows data={data} textStyle={{textAlign:'center', color:'blue'}}/>
//       </Table>
//     </View>
//   );

// };

// const styles = StyleSheet.create({
// container:{
//   flex:1,
//   padding:20,
//   backgroundColor:'#fff',
//   justifyContent:'center'
// }
// })


// export default App;




// ==========                ==========
// Vector Icons 
// ==========                ==========

// import React from 'react'
// import { View, Text, StyleSheet } from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import AntDesign from 'react-native-vector-icons/AntDesign';



// const App = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.sidebar}>
//         <Text style={{ color: 'white', margin: 10, fontSize: 20 }}>Gmail</Text>

//         <View style={{height:0.4, backgroundColor: '#fff'}}></View>
//         <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, marginTop:20, marginBottom:20 }}>
//           <MaterialCommunityIcons name="inbox" size={20} color="#fff" />
//           <Text style={styles.name}>All inboxes</Text>
//         </View>
//         <View style={{height:0.4, backgroundColor: '#fff'}}></View>


//         <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
//           <Icon name="inbox" size={20} color="#fff" />
//           <Text style={styles.name}>Primary</Text>
//         </View>

//         <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
//           <AntDesign name="setting" size={20} color="#fff" />
//           <Text style={styles.name}>Settings</Text>
//         </View>

//         <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
//           <Icon name="inbox" size={20} color="#fff" />
//           <Text style={styles.name}>Social</Text>  
//         </View>

//         <Text style={{marginLeft:10, marginTop:20, fontSize:12, color:'#fff'}}>All labels</Text>

//         <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
//           <Icon name="star-o" size={20} color="#fff" />
//           <Text style={styles.name}>Starred</Text>
//         </View>


//         <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
//           <MaterialCommunityIcons name="alarm-snooze" size={20} color="#fff" />
//           <Text style={styles.name}>Snoozed</Text>
//         </View>

//         <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
//           <MaterialIcons name="label-important-outline" size={20} color="#fff" />
//           <Text style={styles.name}>Important</Text>
//         </View>

//         <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
//           <Ionicons name="send-outline" size={20} color="#fff" />
//           <Text style={styles.name}>Sent</Text>
//         </View>

//         <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
//           <MaterialIcons name="schedule-send" size={20} color="#fff" />
//           <Text style={styles.name}>Scheduled</Text>
//         </View>

//         <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
//           <MaterialCommunityIcons name="send-circle-outline" size={20} color="#fff" />
//           <Text style={styles.name}>Outbox</Text>
//         </View>

//         <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
//           <MaterialIcons name="drafts" size={20} color="#fff" />
//           <Text style={styles.name}>Drafts</Text>
//         </View>

//         <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
//           <MaterialCommunityIcons name="email-multiple-outline" size={20} color="#fff" />
//           <Text style={styles.name}>All mail</Text>
//         </View>

//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   sidebar: {
//     width: '60%',
//     height: '100%',
//     backgroundColor: '#404040'
//   },
//   name:{
//     color:'#fff',
//     marginLeft:20
//   }
// })

// export default App




// ==========                ==========
          // reactnative pdf 
// ==========                ==========

// import React from 'react'
// import { View, Button, Alert } from 'react-native'
// import { PDFDocument } from 'pdf-lib';
// import RNFS from 'react-native-fs';


// const App = () => {


//     const handleGeneratePDF = async()=> {
//         try{
//           const pdfDoc= await PDFDocument.create();
//           const page =pdfDoc.addPage();
//           page.drawText('Hello My PDF!!', {x:50,y:400,size:20});
//           const pdfBytes= await pdfDoc.saveAsBase64({dataUri:false});
//           const pdfPath= `${RNFS.ExternalDirectoryPath}/test1.pdf`;
//           await RNFS.writeFile(pdfPath,pdfBytes,'base64');
//           console.log(pdfPath);
//           Alert.alert(
//             'PDF Generated',
//             `PDF saved at ${pdfPath}`,
//           );
//         } // Try closed here
//         catch(error)
//         {
//           console.log(error);
//           Alert.alert(
//             'Error',
//             'Failed to generate PDF, Try again',
//           );
//         }
//         };

//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Button title="Generate PDF" onPress={handleGeneratePDF} />
//       </View>
//     )
//   }

// export default App;



// ==========                ==========
          // reactnative toast 
// ==========                ==========

import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import Toast from 'react-native-toast-message'

const App = ()=>{
  const showToast = ()=>{
    Toast.show({
      type:'success',
      text1: 'Hello',
      text2: 'This is a success message',
      visibilityTime:4000,
      autoHide:true,
      topOffset:30
    })
  }
    return (
      <View style={styles.container}>
        <Button title='Show Toast' onPress={showToast}/>
        <Toast config={toastConfig} ref= {(ref)=>Toast.setRef(ref)} />
      </View>
    )
  }
  const toastConfig = {
    success: (props) => (
      <View style={styles.toast}>
        <Text style={styles.toastTextBold}>{props.text1}</Text>
        <Text style={styles.toastText}>{props.text2}</Text>
      </View>
    ),
  };

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toast: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  toastTextBold: {
    color: 'white',
    fontWeight: 'bold',
  },
  toastText: {
    color: 'white',
  },

})

export default App;

// import React from 'react';
// import Home from './components/Home';
// import Kyc from './components/Kyc';
// import AboutUs from './components/AboutUs';
// const App = () => {
//   return (
//     <>
//       {/* <Home />; */}
//       {/* <Kyc /> */}
//       <AboutUs/>
//     </>
//   )
// };
// export default App;



// ================webview================

// import { SafeAreaView, StyleSheet } from 'react-native'
// import React from 'react'
// import { WebView } from 'react-native-webview'

// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <WebView style={{ marginTop: 20 }} source={{ uri: "https://www.google.com/" }} />
//     </SafeAreaView>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   }
// })
