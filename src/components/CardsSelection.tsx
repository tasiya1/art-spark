import { useEffect, useState } from "react"
import { AllCards, type Card, type CardType } from "../types"
import type { DeckVariant } from "./DeckOfCards"

export interface CardsSelectionProps {
    onSelectionChange: (selected: CardType[]) => void;
    onDone: () => void;
}

function CardsSelection({onSelectionChange, onDone} : CardsSelectionProps) {

    const [selectedCards, setSelectedCards] = useState<CardType[]>([])
    const [cardsToSelect, setCardsToSelect] = useState<CardType[]>(Object.values(AllCards).map((deck) => (deck.type)))

    const selectCard = (card: CardType) => {
        setCardsToSelect(prev => prev.filter(c => c!= card))
        setSelectedCards(prev => [...prev, card])
    }

    const deselectCard = (card: CardType) => {
        setSelectedCards(prev => prev.filter(c => c!= card))
        setCardsToSelect(prev => [...prev, card])
    }

    useEffect(() => {
        onSelectionChange(selectedCards)
    }, [selectedCards, onSelectionChange])

    return <>
        <h1 className="app-header">Art-spark</h1>
        <h2 className="mode-header">Please select decks (four recommended):</h2>

        <div className="decks-two">
            <div className="decks-selection">
                {selectedCards.map((card) => (
                    <div className="deck-option" key={card} onClick={() => {deselectCard(card)}}>
                        {AllCards[card].label}
                    </div>
                ))}
            </div>
            <div className="decks-selection">
                {cardsToSelect.map((card) => (
                    <div className="deck-option" key={card} onClick={() => {selectCard(card)}}>
                        {AllCards[card].label}
                    </div>
                ))}
            </div>
            
            <div className="button-done-wrapper">
                <button className="button-big button-done" onClick={() => onDone()}></button>
            </div>
        </div>


        
    </>
}

export default CardsSelection