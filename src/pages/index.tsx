import type { Component } from 'solid-js';
import Counter  from '../components/Counter';
import Layout from '../components/Layout';
const Home: Component = () => {
  return (
    <Layout>
      <h1 class="text-3xl font-bold underline">Home Page</h1>
      <Counter></Counter>
    </Layout>
  )
}

export default Home