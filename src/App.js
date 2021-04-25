/*
 * @Author: your name
 * @Date: 2021-04-22 09:37:15
 * @LastEditTime: 2021-04-25 10:50:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\part1\src\App.js
 */
import './App.css';
import React, { useState,useEffect  } from 'react'
import Note from './components/Note'
import axios from 'axios' 

const App = () => {
  const [notes, setNotes] = useState([])

  const [newNote, setNewNote] = useState('') 
  const [showAll, setShowAll] = useState(true)

  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important)

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])

  // useEffect(() => {
  //   console.log('effect')
  
  //   const eventHandler = response => {
  //     console.log('promise fulfilled')
  //     setNotes(response.data)
  //   }
  
  //   const promise = axios.get('http://localhost:3001/notes')
  //   promise.then(eventHandler)
  // }, [])
  
  console.log('render', notes.length, 'notes')
  
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
  
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
      {notesToShow.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>   
    </div>
  )
}

export default App;
