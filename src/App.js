/*
 * @Author: your name
 * @Date: 2021-04-22 09:37:15
 * @LastEditTime: 2021-04-23 15:06:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\part1\src\App.js
 */
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
// function App() {
//   const now = new Date()
//   const a = 10
//   const b = 20
//   const name = 'Peter'
//   const age = 10
//   console.log('Hello from component')
//   return (
//     <div className="App">
//         <p>Hello world, it is {now.toString()}</p>
//       <p>
//         {a} plus {b} is {a + b}
//       </p>
//       <h1>Greetings</h1>
//       <Hello name="George" />
//       <Hello name="Daisy" />
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   );
// }

// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   const increaseByOne = () => setCounter(counter + 1)
//   const decreaseByOne = () => setCounter(counter - 1)
//   const setToZero = () => setCounter(0)

//   return (
//     <div>
//       <Display counter={counter}/>
//       <Button
//         handleClick={increaseByOne}
//         text='plus'
//       />
//       <Button
//         handleClick={setToZero}
//         text='zero'
//       />     
//       <Button
//         handleClick={decreaseByOne}
//         text='minus'
//       />           
//     </div>
//   )
// }


// const App = () => {
//   const [clicks, setClicks] = useState({
//     left: 0, right: 0
//   })

//   const handleLeftClick = () =>
//   setClicks({ ...clicks, left: clicks.left + 1 })

// const handleRightClick = () =>
//   setClicks({ ...clicks, right: clicks.right + 1 })

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//   )
// }

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     // setAll(allClicks.concat('L'))
//     allClicks.push('L')
//     setAll(allClicks)
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       {left}
//       <Button handleClick={handleLeftClick} text='left' />
//       <Button handleClick={handleRightClick} text='right' />
//       {right}
//       <History allClicks={allClicks} />
//     </div>
//   )
// }

// const App = () => {
//   const [value, setValue] = useState(10)

//   const hello = (who) => {
//     const handler = () => {
//       console.log('hello', who)
//     }
//     return handler
//   }

//   return (
//     <div>
//       {value}
//       <button onClick={hello('world')}>button</button>
//       <button onClick={hello('react')}>button</button>
//       <button onClick={hello('function')}>button</button>
//     </div>
//   )
// }

const App = () => {
  const [value, setValue] = useState(10)
  
  const setToValue = (newValue) => () => {
    setValue(newValue)
  }
  
  return (
    <div>
      {value}
      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button>
    </div>
  )
}

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age
  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

export default App;
