import { useState } from 'react'
import { Form } from './components/Form/Form'
import { List } from './components/List/List'

import './App.css'

function App() {
  const [items, setItems] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const inputValue = e.target.elements.add.value
    setItems([...items, { id: +new Date(), value: inputValue, completed: false }])
    e.target.elements.add.value = ''
  }

  return (
    <div className="App">
      <Form onSubmit={handleSubmit} />
      <List items={items} setItems={setItems} />
    </div>
  )
}

export default App
