import { Text, Form, TodoList, EditForm } from 'components';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

export const Todos = ({ tabIndex }) => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = window.localStorage.getItem('saved-todos');
    return JSON.parse(savedTodos) || [];
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const findTodo = text => {
    if (todos.find(todo => todo.text === text)) {
      return true;
    }
  };

  useEffect(() => {
    window.localStorage.setItem('saved-todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = text => {
    if (findTodo(text)) {
      alert('This TODO already exist, please set another one!');
      return;
    }

    const newTodo = {
      id: nanoid(),
      text,
    };

    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = todoId => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };

  const handleEditTodo = (id, text) => {
    setIsEditing(true);
    setCurrentTodo({ id, text });
  };

  const cancelUpdate = () => {
    setCurrentTodo({});
    setIsEditing(false);
  };

  const handleUpdateTodo = event => {
    event.preventDefault();
    const editForm = event.target;
    const editInputValue = editForm.elements.text.value.trim();

    if (findTodo(editInputValue)) {
      alert('This TODO already exist, please set another one!');
      return;
    }

    setCurrentTodo({
      ...currentTodo,
      text: (currentTodo.text = editInputValue),
    });

    todos.map(todo => {
      if (todo.id === currentTodo.id) {
        todo.text = currentTodo.text;
      }
    });

    setTodos([...todos]);
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <EditForm
          defaultValue={currentTodo.text}
          updateTodo={handleUpdateTodo}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <Form addTodo={handleAddTodo} tabIndex={tabIndex} />
      )}
      {todos.length > 0 ? (
        <TodoList
          todosData={todos}
          onDelete={handleDeleteTodo}
          onEditTodo={handleEditTodo}
        />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
