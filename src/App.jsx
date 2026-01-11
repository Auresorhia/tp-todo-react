import {Route, Routes} from 'react-router'
import './App.css'
import Template from './components/Template'
import Nothing from './components/Nothing'
import Todo from './components/Todo'


function App() {

  return (
    <Routes>
      <Route path='/' element={<Template/>} >
        <Route path="/todo" element={<Todo/>} />
      </Route>
        <Route path='*' element={<Nothing/>} />
    </Routes>
  )
}

export default App
