import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import { CreateTodo } from './Createtodo'
import { todosSelector } from './stores/atom/todo'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { themeAtom } from './stores/atom/theme'
import { FiltterTodo } from './filtter'

function App() {
 
  return(
    <div>  
    <RecoilRoot>
     <Theme/>
      <MainApp/>
    </RecoilRoot>
    </div>
  )
}
function MainApp() {
  const todos = useRecoilValue(todosSelector);
  return (
    <div>
      <h1>Todo List</h1>
      <CreateTodo />
      <FiltterTodo todos={todos} />
      {todos.map((todo) => (
        <div key={todo._id}>
           <h2>{todo.title}</h2>
           <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
}

function Theme() {
  const [theme, setTheme] = useRecoilState(themeAtom);

  // Effect to update the body's class name when theme changes
  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
  }, [theme]); // This ensures that the effect runs whenever the theme changes

  return (
    <div>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Switch to {theme === 'dark' ? 'light' : 'dark'} Theme
      </button>
    </div>
  );
}

export default App
