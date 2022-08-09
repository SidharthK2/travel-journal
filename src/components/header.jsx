import React from 'react'

export default function Header () {
    return (
    <div className='flex justify-center items-center font-sans text-white bg-[#F55A5A] gap-4 w-screen'>
        <img className='h-3/5 m-2' src="src/assets/logo.png" alt="logo" />
        <span>My Travel Journal</span>
    </div>
    )
}