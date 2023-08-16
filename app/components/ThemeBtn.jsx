'use client'

import { useTheme } from 'next-themes'
import { HiMoon, HiSun } from 'react-icons/hi'
import React, { useState } from 'react'

const ThemeBtn = () => {
    const { theme, setTheme } = useTheme()

    const [mounted, setMounted] = useState(false)
    useState(() => setMounted(true), [])

    if (!mounted) {
        return null
    }

    return (
        <p
            className="text-black"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            {theme === 'dark' ? (
                <HiSun className="text-black dark:text-yellow-500 text-lg" />
            ) : (
                <HiMoon className="text-black dark:text-yellow-500 text-lg" />
            )}
        </p>
    )
}

export default ThemeBtn
