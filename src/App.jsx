import { useState } from 'react'
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterC from './components/CounterC'
import CounterF from './components/CounterF'
import ListManager from './components/ListManager'
import ColorBox from './components/ColorBox'
import GradeManager from './components/GradeManager'
import TodoList from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <Header />
          <ColorBox 
            initialColor="#FF5733"
            colorOptions={['#FF5733', '#33FF57', '#3357FF', '#F033FF', '#33FFF0', '#FFB833']}
          />
          <GradeManager initialNotes={[15, 12.5, 18, 9.5]} />
          <TodoList 
            initialTasks={[
              { id: 1, name: 'Faire les courses', priority: 'Haute', completed: false },
              { id: 2, name: 'Réviser React', priority: 'Moyenne', completed: true },
              { id: 3, name: 'Faire du sport', priority: 'Basse', completed: false }
            ]} 
          />
          <CounterC counter={10}/>
          <CounterF initialCount={0} step={1}/>
          <ListManager 
            initialItems={['React', 'Angular', 'VueJs']} 
            placeholder="Entrez un nouveau framework..."
          />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
