import type { Component } from 'solid-js'
import counterStore from '../store/counter'

const [count,setCount] = counterStore
const Counter: Component = () => {
  return (
    <div class="text-3xl">
      <h1 onClick={()=>setCount(count()+1)}>counter: {count()}</h1>
    </div>
  )
}

export default Counter