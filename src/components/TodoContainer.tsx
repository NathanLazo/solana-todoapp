import React, { useState } from "react";
import { CreateTodo } from "./CreateTodo";
import TodoList from "./TodoList";

type TodoType = {
  id: string;
  todo: string;
  done: boolean;
  createdAt: Date;
};

export default function TodoContainer() {
  const [todos, setTodos] = useState<TodoType[] | null>(null);

  return (
    <main className=' w-full flex justify-center items-center'>
      <div className='py-10'>
        <div className='w-full flex justify-between items-center'>
          <h2 className='px-4 text-base font-semibold leading-7 text-white sm:px-6 lg:px-8'>
            Todo List
          </h2>
          <CreateTodo setTodos={setTodos} />
        </div>
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </main>
  );
}
