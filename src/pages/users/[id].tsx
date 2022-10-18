import type { Component } from 'solid-js';
import {useParams} from '@solidjs/router'
const UserPage: Component = () => {
  const {id} = useParams()
  return (
    <>
      <h1>User Page {id}</h1>
    </>
  )
}

export default UserPage