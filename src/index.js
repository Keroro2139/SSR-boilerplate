import express from 'express'
import renderer from './helpers/renderer'

const app = express()
const PORT = 3000

// Tell to go to find the bundle.js with static directory such as public/build.
app.use(express.static('public'))
app.get('*', (request, response) => {
    
    response.send(renderer(request))

})
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})