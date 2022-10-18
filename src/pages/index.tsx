import type { Component } from 'solid-js';
import Counter  from '../components/Counter';

const Home: Component = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Counter></Counter>
    </>
  )
}

export default Home