import { useEffect, useState } from "react"
import DeckOfCards, { type DeckVariant } from "./DeckOfCards"
import type { CardType } from "../types"

export interface CardsPresentationProps {
    cardsToShow: CardType[];
    onBack: () => void;
}

function CardsPresentation({cardsToShow, onBack} : CardsPresentationProps) {

    const [cards, setCards] = useState<CardType[]>([])
    const [refreshTrigger, setRefreshTrigger] = useState<number>(0)

    const reloadCards = () => {
        setRefreshTrigger(prev => prev + 1)
    }

    useEffect(() => {
        setCards(cardsToShow)
    }, [])

    return <>

        <div className="menu-buttons">
            <button className="button-small button-back" onClick={onBack}></button>
            <button className="button-small button-reload" onClick={reloadCards}></button>
        </div>

        <div className="decks-container">
        {cards.map((c, i) => (
            <DeckOfCards cardVariant={c} refreshTrigger={refreshTrigger} />
        ))}
            
        </div>
    </>
}

export default CardsPresentation