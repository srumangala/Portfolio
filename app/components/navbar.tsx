import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'	

const navbar = () => {
  return (
    <>
    <nav>
        <a href="">
            <Image src = {assets.logo} alt = "logo" className = "w-28 cursor-pointer mr-14"/>
        </a>
        <ul>
            <li><a href = "#top">Home</a></li>
            <li><a href = "#about">About</a></li>
            <li><a href = "#resume">Resume</a></li>
            <li><a href = "#projects">Projects</a></li>
            <li><a href = "#contact">Contact</a></li>
        </ul>
    </nav>
    </>
  )
}

export default navbar