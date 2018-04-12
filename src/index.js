import 'babel-polyfill'
import express from 'express'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'

const app = express()
const PORT = 3000

// Tell to go to find the bundle.js with static directory such as public/build.
app.use(express.static('public'))
app.get('*', (request, response) => {

    const store = createStore()

    // Some login to initialize and load data into the store.

    response.send(renderer(request, store))

})
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})