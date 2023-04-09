import React from 'react';

function TodoItem(props) {
    const { id, text, completed, onToggle, onDelete } = props;

    return (
        <div>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => onToggle(id)}
            />
            <span>{text}</span>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
}

export default TodoItem