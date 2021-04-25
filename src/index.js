/*
 * @Author: your name
 * @Date: 2021-04-22 09:37:15
 * @LastEditTime: 2021-04-25 10:39:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\part1\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import axios from 'axios'

// axios.get('http://localhost:3001/notes').then(response => {
//   const notes = response.data
//   console.log(notes)
// })

// const promise2 = axios.get('http://localhost:3001/foobar')
// console.log(promise2)

// const notes = [
//   {
//     id: 1,
//     content: 'HTML is easy',
//     date: '2019-05-30T17:30:31.098Z',
//     important: true
//   },
//   {
//     id: 2,
//     content: 'Browser can execute only JavaScript',
//     date: '2019-05-30T18:39:34.091Z',
//     important: false
//   },
//   {
//     id: 3,
//     content: 'GET and POST are the most important methods of HTTP protocol',
//     date: '2019-05-30T19:20:14.298Z',
//     important: true
//   }
// ]


// ReactDOM.render(
//   <React.StrictMode>
//     <App notes={notes} />,
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(<App />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
