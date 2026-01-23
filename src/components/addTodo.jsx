"use client";
import { addTodo } from "@/lib/features/stages/stageSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function AddTodo() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const todos = useSelector((state) => state.todos);
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(title));
    setTitle("");
  };
  return (
    <>
      <div className="m-11">
        <h1 className="text-black font-bold m-5">Todos</h1>
        <div className="m-5 bg-gray-200 p-2 ">
          {todos.map((todo) => (
            <h1 key={todo.id}>Ttile:{todo.title}</h1>
          ))}
        </div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-black mx-5 p-2"
        />
        <button
          onClick={addTodoHandler}
          className="bg-red-500 text-white hover:cursor-pointer rounded-md p-2 "
        >
          Add Todo
        </button>
      </div>
    </>
  );
}
