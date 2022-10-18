/* @refresh reload */
import { render } from 'solid-js/web'
import { Router,useRoutes } from "@solidjs/router"
console.log(useRoutes)
import routes from '~solid-pages'
import './index.css'
// import App from './App'
console.log(routes)
render(() =>{
  const Routes = useRoutes(routes)
  return (
    <Router>
      {/* <App /> */}
      <Routes />
    </Router>
  )
}
, document.getElementById('root') as HTMLElement)
