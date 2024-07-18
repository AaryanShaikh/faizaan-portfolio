import React from 'react'
import { Hero, Navbar, Transformations } from '.'

const Main = () => {
    return (
        <div>
            <Navbar />
            <div style={{ overflowY: "scroll" }}>
                <Hero />
                <Transformations />
            </div>
        </div>
    )
}

export default Main