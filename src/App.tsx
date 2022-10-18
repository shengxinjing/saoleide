import type { Component } from 'solid-js';

import Counter from './components/Counter'
import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <div>
          <Counter />
        </div>
      </header>

    </div>
  );
};

export default App;
