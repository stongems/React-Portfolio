import React from 'react'
import Hero from '../../components/Hero/Hero'
import Card from '../components/Card/Card'

export default function Portfolio() {
    return (
        <div>
            {/* <Hero title="Portfolio" subtitle="Here" /> */}
            <h1>Portfolio</h1>
            <Card className="card" title="Phoenix Sky" img ={}/>
            <Card className="card" title="Employee Management System" img ={}/>
            <Card className="card" title="Password Generator" img ={}/>
            <Card className="card" title="Coding Quiz" img ={}/>
            <Card className="card" title="Object Oriented Programing" img ={}/>
            <Card className="card" title="Portfolio 2.0" img ={}/>
        </div>
    )
}
