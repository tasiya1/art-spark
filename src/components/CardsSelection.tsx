import { useEffect, useState } from "react"
import { AllCards, type Card, type CardType } from "../types"
import type { DeckVariant } from "./DeckOfCards"

export interface CardsSelectionProps {
    onSelectionChange: (selected: CardType[]) => void;
    onDone: () => void;
    onOpenSaved: () => void;
    onDaily: () => void;
}

function CardsSelection({onSelectionChange, onDone, onOpenSaved, onDaily} : CardsSelectionProps) {

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
        <div className="app-header">
            <div className="header-challenge" onClick={onDaily}>Daily challenge</div>

            <h1 className="app-title">
                <span>A</span>
                <span>r</span>
                <span>t</span>
                <span>-</span>
                <span>s</span>
                <span>p</span>
                <span>a</span>
                <span>r</span>
                <span>k</span>
            </h1>

            <div className="header-challenge">Surprise me!</div>
        </div>
        
        <h2 className="mode-header">Please select decks (four recommended):</h2>

        <div className="decks-two">
            <div className="decks-selection">
                {selectedCards.map((card) => (
                    <div className="deck-option option-selected" key={card} onClick={() => {deselectCard(card)}}>
                        <span>{AllCards[card].label}</span>
                    </div>
                ))}
            </div>
            <div className="decks-selection">
                {cardsToSelect.map((card) => (
                    <div className="deck-option" key={card} onClick={() => {selectCard(card)}}>
                        <span className="full-title">{AllCards[card].label}</span>
                        <span className="first-l-title">{AllCards[card].uniqueLetter}</span>
                    </div>
                ))}
            </div>
            
            <div className="side-buttons-wrapper">
                <div className="button-done-wrapper">
                    <button className="button-big button-done" onClick={() => onDone()}></button>
                </div>

                <div className="button-saved-wrapper">
                    <button className="button-saved" onClick={() => onOpenSaved()}>
                        Saved combinations
                    </button>
                </div>
            </div>
            
        </div>


        
    </>
}

export default CardsSelection