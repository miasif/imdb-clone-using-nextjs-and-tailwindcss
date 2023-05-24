'use client'
import React, { useEffect, useState } from 'react'
import {BsMoonStarsFill} from "react-icons/bs"
import {MdLightMode} from "react-icons/md"
import { useTheme } from 'next-themes'



function DarkModeSwitch() {
  const { systemTheme ,theme, setTheme } = useTheme()
  const [mount, setMount] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme; 
  useEffect(()=>setMount(true),[])
  return (
    <>
    {mount && currentTheme === "dark" ? (
        <MdLightMode
          onClick={() => setTheme("light")}
          className="text-xl cursor-pointer  hover:text-amber-500"
        />
      ) : (
        <BsMoonStarsFill
          onClick={() => setTheme("dark")}
          className="text-xl cursor-pointer hover:text-amber-500"
        />
      )}
    </>
  )
}

export default DarkModeSwitch