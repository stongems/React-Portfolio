import React from 'react'

export default function Navigation({title}) {
    // const {title} = props; ->   ^^^^^^^
    console.log(title)
    return (
        <div>
            {title}
        </div>
    )
}
