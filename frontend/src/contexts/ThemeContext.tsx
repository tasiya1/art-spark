import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export const colorThemes = ["#f16026", "#41301a", "#000000", 
    "#538363", "#ee5847", "#ffa1a7", "#4627F5",
    "#985ce7", "#A2C255", "#91336A"
]

type ThemeContextType = {
    themeColor: string;
    setThemeColor: (color: string) => void
}

const ThemeContext = createContext<ThemeContextType | null>(null) 

export const ThemeProvider = ({children}: {children : ReactNode}) => {
    const [themeColor, setThemeColor] = useState<string>(() => {return localStorage.getItem('artSparkThemeColor') || '#000000'})

    const updateTheme = (color: string) => {
        setThemeColor(color)
        localStorage.setItem('artSparkThemeColor', color)
    }

    useEffect(() => {
        document.documentElement.style.setProperty('--main-color', themeColor)
    }, [themeColor])

    return (
        <ThemeContext.Provider value={{themeColor, setThemeColor: updateTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const ctx = useContext(ThemeContext)
    if (!ctx) console.error("theme context error")
    return ctx;
}