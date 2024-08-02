import React from 'react';
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native';

const ResultScreen = ({navigation, route }) => {
  const { questions } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Results</Text>
      <FlatList
        data={questions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.questionContainer}>
            <Text style={styles.question}>{item.question}</Text>
            <Text style={styles.correctAnswer}>
              Correct Answer: {item.Options[item.correctAnswer - 1]}
            </Text>
            {item.marked !== item.correctAnswer && (
              <Text style={styles.yourAnswer}>
                Your Answer: {item.Options[item.marked - 1]}
              </Text>
            )}
          </View>
        )}
      />
            {/* <TouchableOpacity onPress={()=>navigation.navigate('Quiz')}><Text>Home</Text></TouchableOpacity> */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  questionContainer: {
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  correctAnswer: {
    color: 'green',
  },
  yourAnswer: {
    color: 'red',
  },
});

export default ResultScreen;
