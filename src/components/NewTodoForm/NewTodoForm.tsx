import React from 'react';

export const NewTodoForm: React.FC = () => {
  return (
    <>
      <h1 className="todoapp__title">todos</h1>

      <form>
        <input
          type="text"
          data-cy="createTodo"
          className="new-todo"
          placeholder="What needs to be done?"
        />
      </form>
    </>
  );
};
