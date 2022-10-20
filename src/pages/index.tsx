import type { Component } from 'solid-js';
import Counter  from '../components/Counter';
import Header from '../components/Header';
const Home: Component = () => {
  return (
    <>
     <Header></Header>
      <h1 class="text-3xl font-bold underline">Home Page</h1>
      <Counter></Counter>
    </>
  )
}

export default Home