import type { Component } from 'solid-js';
import { Routes, Route, A} from "@solidjs/router"

import Counter from './components/Counter'
import logo from './logo.svg'
import styles from './App.module.css'

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <nav>
          <A href="/">Home</A> | 
          <A href="/about">About</A> | 
        </nav>
        <Routes>
          <Route path="/" component={Counter} />
          <Route path="/about" element={<div>This site was made with Solid</div>} />
        </Routes>

      </header>

    </div>
  );
};

export default App;
