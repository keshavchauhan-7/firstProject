import React, { useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { questionData } from './Questions'
import QuestionItem from './QuestionItem';

const QuizApp = () => {
  const [currentIndex, setCurrentindex] = useState(1);
  return (

    <View style={{ flex: 1 }}>
      <Text
        style={{
          fontSize: 20,
          marginTop: 20,
          marginLeft: 20,
          color: '#000'
        }}
      >Quiz : {'' + currentIndex + '/' + questionData.length}</Text>

      <View style={{ marginTop: 30 }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          data={questionData}
          renderItem={({ item, index }) => {
            return <QuestionItem data={item} />
          }}
        />
      </View> 
    </View>
  )
}

export default QuizApp