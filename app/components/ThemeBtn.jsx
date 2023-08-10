'use client'

import { useTheme } from 'next-themes'
import { HiMoon, HiSun } from 'react-icons/hi'
import React from 'react'

const ThemeBtn = () => {
    const { theme, setTheme } = useTheme()

    return (
        <p
            className="text-black"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            {theme === 'dark' ? 'light' : 'dark'}
        </p>
    )
}

export default ThemeBtn
