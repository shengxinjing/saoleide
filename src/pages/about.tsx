
import { createSignal } from "solid-js"
import type { Component } from 'solid-js'
import Layout from "../components/Layout"


const About: Component = () => {
  const [todos, setTodos] = createSignal<string[]>(["Learn Solid", "Build a Todo App"])
  console.log(todos,setTodos)
  return (
    <Layout>
      <h2>Abouts code markdown...</h2>
    </Layout>
  )
}

export default About