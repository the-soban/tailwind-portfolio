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
            {theme === 'dark' ? <HiSun /> : <HiMoon />}
        </p>
    )
}

export default ThemeBtn
