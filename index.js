// const { Router } = require('express')
const express = require('express')
const morgan = require('morgan')
const app = express()
var bodyParser = require('body-parser'); //引入body拿参的中间件模块



app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(morgan('tiny'))
app.use(express.json())
const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('Header', request.headers)
    console.log('---')
    next()
  }
app.use(requestLogger)
// app.use(Router)
// const unknownEndpoint = (request, response) => {
//     response.status(404).send({ error: 'unknown endpoint' })
//   }
  
// app.use(unknownEndpoint)
let persons = [
    {
        id: 1,
        name: "Alie Kelais",
        number: "090-334225"
    }, {
        id: 2,
        name: "Ble Kelais",
        number: "090-454562"
    }, {
        id: 3,
        name: "Oukes Kelais",
        number: "090-453263"
    }, {
        id: 4,
        name: "Lie Kelais",
        number: "343-223333"
    }
]

// app.get('/', (req,res) => {
//     res.render('clienttest.html')
// } )

app.get('/api/persons',(req,res) => {
    res.json(persons)
})

app.get('/info', (req,res) => {
    const now = new Date()
    res.send(`<p>Phonebook has info for ${persons.length} people <br/>
    ${now}</p>`)
})

app.get('/api/persons/:id', (req,res) => {
    const id = req.params.id * 1
    const person = persons.find((person) => id == person.id)
    if(person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.delete('api/persons/:id', (req,res) => {
    const id = req.params.id * 1
    // persons.splice(id,1)
    persons = persons.filter(person => person.id !== id)
    res.status(204).end()
})

const generateId = function () {
    let maxId = persons.length > 0 ? Math.max(...persons.map(p => p.id)) : 0
    return maxId + 1
}

app.post('api/persons', (req,res) => {
    const body = req.body
    if(!body.name || !body.number) {
        return res.status(400).json({
            error: 'name or number is not found'
        })
    }
    const person = {
        id: generateId(),
        name: body.name,
        number: body.number,

    }
    // const name = persons.map(p => p.name)
    // const exzit = name.some(n == person.name)
    // if(!person.name || !person.number || exzit) {
    //    return res.status(400).json({
    //        error:'name must be unique'
    //    })
    // }

    persons.concat(person)
    res.json(person)
    
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)