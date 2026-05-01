import { colorThemes, ThemeProvider, useTheme } from "../contexts/ThemeContext"

export type ThemeWindowProps = {
    onClose: () => void
}

function ThemeWindow({onClose} : ThemeWindowProps) {

    const theme = useTheme()
    if (!theme) return null

    const {setThemeColor} = theme

    return (
        <div className="theme-selection-window">
            <button onClick={onClose} className="button-small close"></button>
            <h2>Select theme</h2>
            <div className="theme-color-option-container">
                {colorThemes.map((color) => 
                    <div className="theme-color-option" style={{backgroundColor: color}}
                    onClick={() => {setThemeColor(color)}}>
                    </div>
                )}
            </div>
            
        </div>)
}

export default ThemeWindow