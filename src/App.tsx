import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import type { CardType } from './types'
import CardsSelection from './components/CardsSelection'
import CardsPresentation from './components/CardsPresentation'
import SavedCards from './components/SavedCards'
import DailyChallenge from './components/DailyChallenge'
import ThemeWindow from './components/ThemeWindow'
import SurpriseMe from './components/SurpriseMe'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
    const [selectedCards, setSelectedCards] = useState<CardType[]>(["composition", "color", "pattern", "object"])
    const [mode, setMode] = useState<"selecting" | "presenting" | "saved" | "daily" | "surprise">("selecting")
    const [modalWindow, setModalWindow] = useState<"theme-window" | null>(null)

    const handleCardsSelection = (selected: CardType[]) => {
        setSelectedCards(selected)
    }

    const goBack = () => {setMode("selecting")}

    useEffect(() => {
        setModalWindow(null)
    }, [mode])

  return (
    <div className="main-screen">
        {mode === "selecting" && <>
            <CardsSelection onSelectionChange={handleCardsSelection}
                onDone={() => setMode("presenting")}
                onOpenSaved={() => setMode("saved")}
                onDaily={() => setMode("daily")}
                onSurpriseMe={() => setMode("surprise")}
            />
            <button className="button-small button-theme-button"
                onClick={() => { if (modalWindow === null) setModalWindow("theme-window")
                    else if (modalWindow === "theme-window") setModalWindow(null)
            }}></button>
        </>}

        {mode === "presenting" && <CardsPresentation cardsToShow={selectedCards} onBack={() => {goBack()}}/>}
        {mode === "saved" && <SavedCards onBack={() => {goBack()}}/>}
        {mode === "daily" && <DailyChallenge onBack={() => {goBack()}}/>}
        {mode === "surprise" && <SurpriseMe onBack={() => {goBack()}}/>}



        <ThemeProvider>
            {modalWindow === "theme-window" && mode === "selecting" && <ThemeWindow onClose={() => setModalWindow(null)}/>}
        </ThemeProvider>
    </div>
  )
}

export default App
