import 'babel-polyfill'
import express from 'express'
import { matchRoutes } from 'react-router-config'
import Routes from './client/Routes'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'

const app = express()
const PORT = 3000

// Tell to go to find the bundle.js with static directory such as public/build.
app.use(express.static('public'))
app.get('*', (request, response) => {

    const store = createStore()

    const promises = matchRoutes(Routes, request.path).map(({ route }) => {
        return route.LoadData ? route.LoadData(store) : null
    })

    Promise.all(promises).then(() => {
        response.send(renderer(request, store))
    })

})
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})