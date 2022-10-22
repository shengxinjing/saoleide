import type { ParentComponent } from 'solid-js'
import Header from '../components/Header'
const Layout: ParentComponent = (props) => {
  return (
    <>
      <Header></Header>
      <main class="mx-auto px-2 sm:px-6">
        {props.children}
      </main>
      <footer>
      </footer>
    </>

  )
}

export default Layout