import type { ParentComponent } from 'solid-js'
import Header from './Header'
const Layout: ParentComponent = (props) => {
  return (
    <>
      <Header></Header>
      <main class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        {props.children}
      </main>
      <footer>
      </footer>
    </>

  )
}

export default Layout