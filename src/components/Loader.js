import { ripples } from 'ldrs'
import React from 'react'

const Loader = () => {
    ripples.register()

    return (
        <l-ripples
            size="155"
            speed="4"
            color="#f5d5ff"
        >
        </l-ripples>
    )
}

export default Loader
