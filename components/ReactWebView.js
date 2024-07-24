import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview'

const ReactWebView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView style={{ marginTop: 20 }} source={{ uri: "https://www.google.com/" }} />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})

export default ReactWebView

