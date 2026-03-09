import { useEffect, useState } from "react"
import type { CardType, Card } from "../types"

export type SavedCard = {
    title: CardType,
    cardVariant: string
}

function SavedCards() {

    //const [savedCards, setSavedCards] = useState<SavedCard[]>([])

    useEffect(() => {
        //const stored = localStorage.getItem('ArtSparkSaved')
        //setSavedCards(prev => stored)
    }, [])

    return <>
        <div className="saved-cards-list">
            
        </div>
    </>
}

export default SavedCards