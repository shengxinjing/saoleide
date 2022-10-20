import type { Component } from 'solid-js'
import { A } from '@solidjs/router'
const Header: Component = () => {
  return (
    <header class="flex-none relative z-50 text-sm leading-6 font-medium  bg-white">
      <nav class="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center  border-b border-gray-100 py-5">
          <A href="/" class="flex-none text-gray-900">
              Home
          </A>
        </div>
        <div class="ml-auto flex items-center">
            <A href="/Todos" class="hidden sm:block hover:text-gray-900">TodoList</A>
            <A href="/Users" class="hidden sm:block ml-6 mr-2 hover:text-gray-900">Users</A>
        </div>
      </nav>
    </header>

  )
}

export default Header