import { createSignal } from "solid-js"
import type { Component } from 'solid-js'
import Layout from "../components/Layout"


const TodoList: Component = () => {
  const [todos, setTodos] = createSignal<string[]>(["Learn Solid", "Build a Todo App"])
  console.log(todos,setTodos)
  return (
    <Layout>
      <h2>Todolists</h2>
    </Layout>
  )
}

export default TodoList