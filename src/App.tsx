import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import type { CardType } from './types'
import CardsSelection from './components/CardsSelection'
import CardsPresentation from './components/CardsPresentation'
import SavedCards from './components/SavedCards'
import DailyChallenge from './components/DailyChallenge'

function App() {
    const [selectedCards, setSelectedCards] = useState<CardType[]>(["composition", "color", "pattern", "object"])
    const [mode, setMode] = useState<"selecting" | "presenting" | "saved" | "daily">("selecting")

    const handleCardsSelection = (selected: CardType[]) => {
        setSelectedCards(selected)
    }

  return (
    <div className="main-screen">
        {mode === "selecting" && <CardsSelection onSelectionChange={handleCardsSelection}
        onDone={() => setMode("presenting")}
        onOpenSaved={() => setMode("saved")}
        onDaily={() => setMode("daily")}
        />}

        {mode === "presenting" && <CardsPresentation cardsToShow={selectedCards} onBack={() => setMode("selecting")}/>}
        {mode === "saved" && <SavedCards onBack={() => setMode("selecting")}/>}
        {mode === "daily" && <DailyChallenge onBack={() => {setMode("selecting")}}/>}
    </div>
  )
}

export default App
