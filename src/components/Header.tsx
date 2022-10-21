import type { Component } from 'solid-js'
import { A } from '@solidjs/router'
const Header: Component = () => {
  return (<nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
          <A href="/">
            <img class="block h-8 w-auto" src="https://cdn.jsdelivr.net/gh/shengxinjing/static/woniu.png" alt="Your Company" />
          </A>
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
                <A href="/todolist" activeClass='bg-gray-900' class="text-white  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" >Todos</A>
                <A href="/about" activeClass='bg-gray-900' class="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</A>
                <A href="/page-not-exist" activeClass='bg-gray-900' class="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">NotFound</A>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button type="button" class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <svg class="h-6 w-6" x-description="Heroicon name: outline/bell" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"></path>
              </svg>
          </button>
        </div >
      </div >
    </div >

  </nav >
  )
}

export default Header