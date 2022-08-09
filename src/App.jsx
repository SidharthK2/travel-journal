import React from 'react'
import Header from './components/header'
import Card from './components/card'
import data from './data'


export default function App() {
    const cards = data.map(item => {
        return (<Card {...item} />)
    })
    return(
        <>
        <Header />
        {cards}
        </>
    )
}