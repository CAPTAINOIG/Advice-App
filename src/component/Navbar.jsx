import React, { useContext, useState } from 'react'
import { RiSpeakFill } from 'react-icons/ri'
import { BiMoon } from 'react-icons/bi'
import { BsSun } from 'react-icons/bs'
import Api from './Api'
import { AppContext } from '../App'


const Navbar = () => {
  const { font, setFont, theme, setTheme } = useContext(AppContext)
  // console.log(font);

  return (
    <>
      <section className='bg-indigo-900 dark:bg-black h-screen'>
        <div className='flex'>
          <div className='text-purple-500 dark:text-red-100 mt-5' id='red'>
            <RiSpeakFill /></div>

          <select id='redd' className='w-30 mt-5 text-purple-500 dark:text-black' onChange={(e) => setFont(e.target.value)}>
            <option value="Serif">Serif</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Poppins">Poppins</option>
            <option value="Noto Serif">Noto Serif</option>
            <option value="Caprasimo">Caprasimo</option>
            <option value="Calligraffitti">Calligraffitti</option>
            <option value="Calistoga">Calistoga</option>
          </select>
          <div className='text-red-100 ms-2 mt-5 text-purple-500 dark:text-dark:text-black cursor-pointer'>
            {
              theme === "dark" ? <BsSun onClick={() => setTheme("light")} /> : <BiMoon className='text-purple-500' onClick={() => setTheme("dark")} />
            }


          </div>
        </div>

        <Api />



      </section>
    </>
  )
}

export default Navbar