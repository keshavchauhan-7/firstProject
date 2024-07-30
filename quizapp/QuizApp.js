import React, { useRef, useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Dimensions, Modal } from 'react-native';
import { questionData } from './Questions';
import QuestionItem from './QuestionItem';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');

const QuizApp = () => {
  const [currentIndex, setCurrentindex] = useState(1);
  const [questions, setQuestions] = useState(questionData);
  const listRef = useRef();
  const [modalVisible, setModalVisible] = useState(false);
  const [quizProgress, setQuizProgress] = useState(questionData.length);
  const [timeRemaining, setTimeRemaining] = useState(600); // 10 minutes in seconds
  const [timerActive, setTimerActive] = useState(true);

  const navigation = useNavigation();
  const progress = currentIndex / quizProgress;

  useEffect(() => {
    if (timerActive) {
      const interval = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(interval);
            setModalVisible(true);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timerActive]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const OnSelectOption = (index, selectedOption) => {
    const tempData = [...questions];
    if (tempData[index].marked === -1) {
      tempData[index].marked = selectedOption;
      setQuestions(tempData);
    }
  };

  const getTextScore = () => {
    let marks = 0;
    questions.forEach((item) => {
      if (item.marked === item.correctAnswer) {
        marks += 5; // Award 5 points for each correct answer
      }
    });
    return marks;
  };

  const reset = () => {
    const tempData = questions;
    tempData.forEach((item) => {
      item.marked = -1;
    });
    setQuestions([...tempData]);
    setCurrentindex(1);
    setTimeRemaining(600);
    setTimerActive(true);
    listRef.current.scrollToIndex({ animated: true, index: 0 });
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 15 }}>
        <Progress.Bar progress={progress} width={null} height={15} color={'purple'} style={{ flex: 1 }} />
        <Text style={{ fontSize: 18, marginLeft: 15 }}>{formatTime(timeRemaining)}</Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            marginTop: 20,
            marginLeft: 20,
            color: '#000',
          }}
        >
          Quiz : {`${currentIndex}/${questionData.length}`}
        </Text>
        <Text
          style={{
            fontSize: 20,
            marginRight: 20,
            fontWeight: '600',
            color: '#000',
          }}
          onPress={() => reset()}
        >
          Reset
        </Text>
      </View>

      <View style={{ marginTop: 30 }}>
        <FlatList
          ref={listRef}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          onScroll={(e) => {
            const x = e.nativeEvent.contentOffset.x / width;
            setCurrentindex((x + 1).toFixed(0));
          }}
          data={questions}
          renderItem={({ item, index }) => {
            return <QuestionItem data={item} selectedOption={(x) => OnSelectOption(index, x)} />;
          }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'absolute',
          bottom: 50,
          width: '100%',
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: currentIndex > 1 ? 'purple' : 'gray',
            height: 50,
            width: 100,
            borderRadius: 10,
            marginLeft: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            if (currentIndex > 1) {
              listRef.current.scrollToIndex({
                animated: true,
                index: parseInt(currentIndex) - 1 - 1,
              });
            }
          }}
        >
          <Text style={{ color: '#fff', fontSize: 20 }}>Previous</Text>
        </TouchableOpacity>

        {currentIndex == 10 ? (
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              height: 50,
              width: 100,
              borderRadius: 10,
              marginRight: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Text style={{ color: '#fff', fontSize: 20 }}>Submit</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              backgroundColor: 'purple',
              height: 50,
              width: 100,
              borderRadius: 10,
              marginRight: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              if (questions[currentIndex - 1].marked !== -1) {
                if (currentIndex < questions.length) {
                  listRef.current.scrollToIndex({
                    animated: true,
                    index: currentIndex,
                  });
                }
              }
            }}
          >
            <Text style={{ color: '#fff', fontSize: 20 }}>Next</Text>
          </TouchableOpacity>
        )}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              backgroundColor: '#ff9',
              width: '90%',
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontSize: 30,
                fontWeight: '800',
                alignSelf: 'center',
                marginTop: 20,
              }}
            >
              Test Score
            </Text>
            <Text
              style={{
                fontSize: 30,
                fontWeight: '800',
                alignSelf: 'center',
                marginTop: 20,
              }}
            >
              {getTextScore()}
            </Text>
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                height: 40,
                padding: 10,
                borderWidth: 1,
                borderRadius: 10,
                marginTop: 20,
                marginBottom: 20,
              }}
              onPress={() => {
                setModalVisible(!modalVisible);
                navigation.navigate('ResultScreen', { questions });
              }}
            >
              <Text>View Result</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default QuizApp;
