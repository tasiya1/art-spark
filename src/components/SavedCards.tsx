import { useEffect, useState } from "react"
import type { CardType, Card, CardVariant } from "../types"
import DeckOfCards from "./DeckOfCards"

export type SavedCard = {
    title: CardType,
    cardVariant: CardVariant
}

export type SavedCardsRecord = {
    savedCards: SavedCard[],
    id: string,
    date: string
}

type SavedCardsProps = {
    onBack: () => void;
}

function SavedCards({onBack} : SavedCardsProps) {

    const [savedCards, setSavedCards] = useState<SavedCardsRecord[]>([])

    const clearStorage = () => {
        localStorage.setItem('artSparkSaved', "")
        setSavedCards([]);
    }

    useEffect(() => {
        const rawStored = localStorage.getItem('artSparkSaved') 
        if (rawStored) {
            try {
                const stored: SavedCardsRecord[] = JSON.parse(rawStored)
                setSavedCards(stored)
            } catch(e) {
                console.log('error parsing saved combinations')
                setSavedCards([])
            }
        }
    }, [])

    return <>
        <div className="menu-buttons">
            <button className="button-small button-back" onClick={onBack}></button>
            <button className="button-small button-erase" onClick={clearStorage}></button>
        </div>
        
        <h2 className="mode-header">{savedCards.length == 0 ? <span>No saved combinations</span> : <span>Saved combinations</span>}</h2>

        
        <div className="saved-cards-list">
            {savedCards.length != 0 && savedCards.map((record, i) => 
            <>
            <span className="date-saved">{record.date}</span>
                <div className="decks-container" key={i}>
                    {record.savedCards.map((card, i) => 
                        <DeckOfCards key={i} card={card} refreshCard={() => {}}/>
                    )}
                    
                </div>
            </>
                
            )}
        </div>
    </>
}

export default SavedCards