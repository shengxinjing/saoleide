import { createSignal,For } from "solid-js"
import type { Component } from 'solid-js'
import Layout from "../layout/Layout"


interface Todo{
  id:number,
  text:string,
  completed:boolean
}
const TodoList: Component = () => {
  const [name,setName] = createSignal<string>('')
  const [todos, setTodos] = createSignal<Todo[]>([
    {id:0,text:'Learn Solidjs',completed:false},
    {id:1,text:'Learn Saoleide',completed:true}
  ])
  let todoId = 2

  const addTodo = (text:string) => {
    setTodos([...todos(), { id: ++todoId, text, completed: false }])
  }
  const toggleTodo = (id:number) => {
    setTodos(todos().map((todo) => (
      todo.id !== id ? todo : { ...todo, completed: !todo.completed }
    )))
  }
  const totalCount = ()=>todos().length
  const finishCount = ()=>todos().filter(v=>v.completed).length
  return (
    <Layout>
      <div class="m-3">
        <input class="input" value={name()} onChange={e=>setName((e.target as HTMLInputElement).value)} />
        <button
          class="btn"
          onClick={(e) => {
            if (!name().trim()) return
            addTodo(name())
            setName("")
          }}
        >
          Add Todo
        </button>
      </div>
      <div class="px-4 text-2xl">

      <For each={todos()}>
        {(todo) => {
          const { id, text } = todo
          console.log(`Creating ${text}`)
          return <div>
            <input
              class="checked:bg-blue-500 m-3"
              type="checkbox"
              checked={todo.completed}
              onchange={[toggleTodo, id]}
            />
            <span
              style={{ "text-decoration": todo.completed ? "line-through" : "none"}}
            >{text}</span>
          </div>
        }}
      </For>
      <div class="text-gray-400">{finishCount} / {totalCount}</div>
      </div>

    </Layout>
  )
}

export default TodoList