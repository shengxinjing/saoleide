import { createSignal } from "solid-js"
import type { Component } from 'solid-js'


const Counter: Component = () => {
  const [count,setCount] = createSignal<number>(666)
  return (
    <div>
      <h1 onClick={()=>setCount(count()+1)}>{count()}</h1>
    </div>
  )
}

export default Counter