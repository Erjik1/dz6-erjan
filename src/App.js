import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    function handleNewTodoChange(event) {
        setNewTodo(event.target.value);
    }

    function handleNewTodoKeyDown(event) {
        if (event.key !== 'Enter') return;

        event.preventDefault();

        const todoText = newTodo.trim();

        if (todoText.length === 0) return;

        setTodos([
            ...todos,
            { id: Date.now(), text: todoText, completed: false },
        ]);
        setNewTodo('');
    }

    function handleTodoToggle(id) {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });

        setTodos(updatedTodos);
    }

    function handleTodoDelete(id) {
        const updatedTodos = todos.filter((todo) => todo.id !== id);

        setTodos(updatedTodos);
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Add a todo"
                value={newTodo}
                onChange={handleNewTodoChange}
                onKeyDown={handleNewTodoKeyDown}
            />
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                    onToggle={handleTodoToggle}
                    onDelete={handleTodoDelete}
                />
            ))}
        </div>
    );
}

export default TodoList;