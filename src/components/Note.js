/*
 * @Author: your name
 * @Date: 2021-04-23 16:26:24
 * @LastEditTime: 2021-04-23 16:26:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\part1\src\components\Note.js
 */


import React from 'react'

const Note = ({ note }) => {
  return (
    <li>{note.content}</li>
  )
}

export default Note