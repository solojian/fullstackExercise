/*
 * @Author: your name
 * @Date: 2021-04-23 16:26:24
 * @LastEditTime: 2021-04-25 15:25:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\part1\src\components\Note.js
 */


import React from 'react'

const Note = ({ note,toggleImportance  }) => {
  const label = note.important
  ? 'make not important' : 'make important'

  return (
     <li className='note'>
      {note.content} 
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}

export default Note