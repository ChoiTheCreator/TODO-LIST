import React, { useState, useRef, useEffect } from 'react';
import { createTodo, getTodos, deleteTodo } from '../api/apiFunctions';
import TodoListHandle from './TodoListHandle';
import TodoAddHandle from './TodoAddHandle';

function TodoInput() {
  const [inputTitle, setInputTitle] = useState('');
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();
  const [todos, setTodos] = useState([]);

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await getTodos(token);
        setTodos(response.data);
      } catch (error) {
        console.error('할 일 목록을 가져오는 중 오류 발생:', error);
      }
    };
    fetchTodos();
  }, [token]);

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      if (!token) {
        alert('로그인이 필요합니다.');
        return;
      }
      
      if (inputTitle.trim() === '') {
        alert('할 일 제목을 입력하세요.');
        document.querySelector('input[placeholder="할 일 제목"]').focus();
        return;
      }

      if (inputValue.trim() === '') {
        alert('계획을 입력하세요.');
        inputRef.current.focus();
        return;
      }

      const response = await createTodo(token, inputTitle, inputValue);

      if (response && response.data) {
        setTodos([...todos, response.data]);
      } else {
        console.error('응답 형식이 예상과 다릅니다:', response);
      }

      setInputTitle('');
      setInputValue('');
    } catch (err) {
      console.error('할 일 추가 중 에러 발생:', err);
      alert('할 일 추가 중 에러가 발생했습니다.');
    }
  };

  const toggleCheck = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
    ));
  };

  const handleDelete = async (id) => {
    try {
      await deleteTodo(token, id);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('할 일 삭제 중 에러 발생:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-6 bg-white rounded-2xl shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">할 일 목록</h2>

      {/* TodoAddHandle 컴포넌트 분리 총 3단. */}
      <TodoAddHandle 
        inputTitle={inputTitle}
        inputValue={inputValue}
        setInputTitle={setInputTitle}
        setInputValue={setInputValue}
        handleAdd={handleAdd}
      />
      
      {/* TodoListHandle 컴포넌트 분리 총 3단 */}
      <TodoListHandle 
        todos={todos}
        toggleCheck={toggleCheck}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default TodoInput;