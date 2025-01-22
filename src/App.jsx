
import './App.css'
import Counter from './components/Counter'
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';

import './index.css';
import MovieApp from './components/MovieApp';
import TodoApp from './components/TodoApp';
import { TodoProvider } from './components/TodoProvider';
import TodoDetails from './components/TodoDetails';

function App() {
 return (
  <>
  <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Counter/>}/>
    </Route>
    <Route path="/movies" element={<Layout/>}>
    <Route index element={<MovieApp/>}/>
    </Route>

    {/* need to wrap the todo app and details in a context becuase there is state needed for two different components */}
    <Route path="/todo" element={<Layout/>}>
      <Route index 
        element = {
         <TodoProvider>
            <TodoApp/>
        </TodoProvider> 
        }/>
    </Route>
    <Route path="/details" element={<Layout/>}>
      <Route index 
      element = {
        <TodoProvider>
          <TodoDetails/>
      </TodoProvider>
      }/>
    </Route>
  </Routes>
     
  </>
 )
}

export default App
