import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ToDoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => toggleComplete(todo.id)}>
        <Ionicons 
          name={todo.completed ? "checkbox-outline" : "square-outline"} 
          size={24} 
          color={todo.completed ? "#4CAF50" : "#FF5722"} 
          style={styles.icon}
        />
      </TouchableOpacity>
      <Text style={[styles.text, todo.completed && styles.completed]}>
        {todo.task}
      </Text>
      <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
        <Ionicons name="trash" size={24} color="#FF5722" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  text: {
    fontSize: 18,
    flex: 1,
    marginLeft: 10,
    color: '#333',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#bbb',
  },
  icon: {
    marginRight: 10,
  },
});

export default ToDoItem;
