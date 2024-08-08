import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import ToDoItem from '../components/ToDoItem';

const ToDoList = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, { id: Date.now(), task, completed: false }]);
      setTask('');
    }
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const markAllComplete = () => {
    setTodos(todos.map(todo => ({ ...todo, completed: true })));
  };

  const clearAllTodos = () => {
    setTodos([]);
  };

  const markAllIncomplete = () => {
    setTodos(todos.map(todo => ({ ...todo, completed: false })));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a task..."
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity style={styles.addButton} onPress={addTodo}>
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={markAllComplete}>
          <Text style={styles.actionButtonText}>Mark All Complete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={markAllIncomplete}>
          <Text style={styles.actionButtonText}>Mark All Incomplete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={clearAllTodos}>
          <Text style={styles.actionButtonText}>Clear All Tasks</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <ToDoItem todo={item} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 15,
    fontSize: 18,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 2,
  },
  addButton: {
    backgroundColor: '#007BFF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 2,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  actionContainer: {
    marginVertical: 10,
    rowGap: 10,
  },
  actionButton: {
    backgroundColor: '#007BFF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 2,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ToDoList;
