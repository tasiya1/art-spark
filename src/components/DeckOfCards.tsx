import { useEffect, useState } from "react"
import { AllCards, type Card, type CardType } from "../types"
import type { SavedCard } from "./SavedCards"


export type DeckVariant = keyof typeof AllCards

//export type DeckInfo = {deckVariant: DeckVariant, cardVariant: Card}

export const CardContents = {

}

export type DeckOfCardsProps = {
    card: SavedCard,
    refreshCard: (key: CardType) => void
}

function DeckOfCards({card, refreshCard} : DeckOfCardsProps) {

    //const [deck, setDeck] = useState(getRandomVariant(CardVariant))
    /*
    useEffect(() => {
        setDeck(getRandomVariant(CardVariant))
    }, [refreshTrigger])
    */

    return <>
    <div className="card-deck">
        <h1 className="deck-title">{AllCards[card.title].label}</h1>
        <div className="card-stack">
            {[...Array(4)].map((_c, i) => (
                <img className="card" style={{left: `${i * 15 + 10}px`}} src="src\media\card-back.png"></img>
            ))}
            <img className="card" style={{left: `${4 * 15 + 10}px`}} src={card.cardVariant.imageUrl}
            onClick={() => {refreshCard(card.title)}}></img>
            
            <p className="card-title">{card.cardVariant.title}</p>
        </div>
        
        
    </div>
    </>
}

export default DeckOfCards