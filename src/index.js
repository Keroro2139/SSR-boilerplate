import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

import Home from './client/components/Home'

const app = express()
const PORT = 3000

// Tell to go to find the bundle.js with static directory such as public/build.
app.use(express.static('public'))
app.get('/', (request, response) => {
    const content = renderToString(<Home />)

    const html = `
    <html>
        <head></head>
        <body>
            <div id='root'>${content}</div>
            <script src="bundle.js"></script>
        </body>
    </html>
    `

    response.send(html)
})
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})