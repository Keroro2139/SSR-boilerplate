import React from 'react'

const Home = () => {
    return (
        <div>
            <div>Welcome to Weerapat's Home Component.</div>
            <button onClick={() => console.log('SSR is real!')}>Button</button>
        </div>
    )
}

export default Home