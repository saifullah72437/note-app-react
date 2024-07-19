import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from './components/Background'
import Foreground from './components/Foreground'
import { NotesContext, NotesContextProvider } from './context'

function App() {
  const [notes, setNotes] = useState([])
  const deleteNote = (id) =>{
    setNotes((prevNotes) => prevNotes.filter(currentNote => (currentNote.id !== id)))
  }
  const addNote = (Note)=>{
    setNotes(prevNotes => [...prevNotes, {id:Date.now(), ...Note}])
  }

  const updateNote = (id, Note) =>{
    setTodos((prevNotes) => prevNotes.map((currentNote) => (currentNote.id === id ? Note : currentNote)))

  }

  return (
    <NotesContextProvider value={{notes, deleteNote, addNote, updateNote}}>
      <div className='relative min-h-[100vh] w-full'>
        <Background/>
        <Foreground/>
      </div>
    </NotesContextProvider>
  )
}

export default App
