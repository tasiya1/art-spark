import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import type { CardType } from './types'
import CardsSelection from './components/CardsSelection'
import CardsPresentation from './components/CardsPresentation'

function App() {
    const [selectedCards, setSelectedCards] = useState<CardType[]>(["composition", "color", "pattern", "object"])
    const [mode, setMode] = useState<"selecting" | "presenting">("selecting")

    const handleCardsSelection = (selected: CardType[]) => {
        setSelectedCards(selected)
    }

  return (
    <div className="main-screen">
        {mode === "selecting" && <CardsSelection onSelectionChange={handleCardsSelection} onDone={() => setMode("presenting")}/>}
        {mode === "presenting" && <CardsPresentation cardsToShow={selectedCards} onBack={() => setMode("selecting")}/>}
    </div>
  )
}

export default App
