import { createSignal } from 'solid-js'
import { useNavigate } from '@solidjs/router'
import type { Component } from 'solid-js';
import Counter  from '../components/Counter';
import Layout from '../layout/Layout';
const Home: Component = () => {
  const navigate = useNavigate()
  const [name,setName] = createSignal('dasheng')
  return (
    <Layout>
      <Counter></Counter>
      <form class="flex w-full max-w-sm mx-auto m-2">
      <input 
        value={name()} onChange={e=>setName(e.target?.value)} 
        class="input" type="text" />
      <button
        onClick={()=>{
          if(name()) navigate('/users/'+name())
        }}
        class="btn" type="button">
        Click
      </button>
  </form>
    </Layout>
  )
}

export default Home