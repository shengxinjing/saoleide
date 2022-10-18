import { createSignal } from "solid-js"
import type { Component } from 'solid-js'


const TodoList: Component = () => {
  const [todos, setTodos] = createSignal<string[]>(["Learn Solid", "Build a Todo App"])
  console.log(todos,setTodos)
  return (
    <div>
      <h1></h1>
    </div>
  )
}

export default TodoList