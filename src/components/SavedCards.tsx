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

    const deleteRecord = (id: string) => {
        const rawStored = localStorage.getItem('artSparkSaved')
        if (!rawStored) return;
        const stored : SavedCardsRecord[] = JSON.parse(rawStored)
        const updated = stored.filter((r : SavedCardsRecord) => r.id != id)

        localStorage.setItem('artSparkSaved', JSON.stringify(updated))
        setSavedCards(updated)
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
            <div className="saved-record">
            <span className="date-saved">{record.date}</span>
            <button className="button-micro delete-record" title="Delete this combination"
            onClick={() => {deleteRecord(record.id)}}></button>
                <div className="decks-container" key={i}>
                    {record.savedCards.map((card, i) => 
                        <DeckOfCards key={i} card={card} refreshCard={() => {}}/>
                    )}
                    
                </div>
            </div>
                
            )}
        </div>
    </>
}

export default SavedCards