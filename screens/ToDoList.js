import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
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
      <Button title="Add Task" onPress={addTodo} color="#007BFF" />
      <View style={styles.actionContainer}>
        <Button title="Mark All Complete" onPress={markAllComplete} color="#4CAF50" />
        <Button title="Mark All Incomplete" onPress={markAllIncomplete} color="#FF9800" />
        <Button title="Clear All Tasks" onPress={clearAllTodos} color="#FF5722" />
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
    backgroundColor: '#f8f9fa',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
    fontSize: 18,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  actionContainer: {
    marginVertical: 10,
    rowGap: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});

export default ToDoList;

// import React, { useState } from 'react';
// import { View, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
// import ToDoItem from '../components/ToDoItem';

// const ToDoList = () => {
//   const [task, setTask] = useState('');
//   const [todos, setTodos] = useState([]);

//   const addTodo = () => {
//     if (task.trim()) {
//       setTodos([...todos, { id: Date.now(), task, completed: false }]);
//       setTask('');
//     }
//   };

//   const toggleComplete = (id) => {
//     setTodos(todos.map(todo =>
//       todo.id === id ? { ...todo, completed: !todo.completed } : todo
//     ));
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   };

//   const markAllComplete = () => {
//     setTodos(todos.map(todo => ({ ...todo, completed: true })));
//   };

//   const clearAllTodos = () => {
//     setTodos([]);
//   };

//   const markAllIncomplete = () => {
//     setTodos(todos.map(todo => ({ ...todo, completed: false })));
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Add a task..."
//         value={task}
//         onChangeText={setTask}
//       />
//       <Button title="Add Task" onPress={addTodo} color="#007BFF" />
//       <View style={styles.actionContainer}>
//         <Button title="Mark All Complete" onPress={markAllComplete} color="#4CAF50" />
//         <Button title="Mark All Incomplete" onPress={markAllIncomplete} color="#FF9800" />
//         <Button title="Clear All Tasks" onPress={clearAllTodos} color="#FF5722" />
//       </View>
//       <FlatList
//         data={todos}
//         renderItem={({ item }) => (
//           <ToDoItem todo={item} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
//         )}
//         keyExtractor={item => item.id.toString()}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//   },
//   input: {
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     marginBottom: 10,
//     fontSize: 18,
//     padding: 10,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//   },
//   actionContainer: {
//     marginVertical: 10,
//     flexDirection: 'column',
//     justifyContent: 'space-around',
//   },
// });

// export default ToDoList;
