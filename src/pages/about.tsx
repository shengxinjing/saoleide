
import type { Component } from 'solid-js'
import Layout from "../layout/Layout"


const About: Component = () => {
  return (
    <Layout>
      <h2 class="text-3xl">Abouts page</h2>
      <p>
        Saoleide (Chinese pronunciation  similar to `Solid`)
      </p>
      <p>
        Get started with Solidjs, Solid-router, and Vite.
      </p>
    </Layout>
  )
}

export default About