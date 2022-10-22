import type { Component } from 'solid-js';
import {useParams ,A} from '@solidjs/router'
const UserPage: Component = () => {
  const {id} = useParams()
  return (
    <div class="text-center m-10">
      <h1 class="text-3xl">Hi <span class="bg-indigo-600 text-white">{id}</span> , are you ok?</h1>
      <A  class="text-2xl underline" href="/">Back to Home</A>
    </div>
  )
}

export default UserPage