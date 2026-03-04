import { useEffect, useState } from "react"
import { AllCards, type Card } from "../types"


export type DeckVariant = keyof typeof AllCards

//export type DeckInfo = {deckVariant: DeckVariant, cardVariant: Card}

function getRandomVariant(deckName: DeckVariant) {
    const deck = AllCards[deckName]
    const randomValue = deck.variants[Math.floor(Math.random() * deck.variants.length)]
    return randomValue
}

export const CardContents = {

}

export type DeckOfCardsProps = {
    cardVariant: DeckVariant,
    refreshTrigger: number
}

function DeckOfCards({cardVariant: CardVariant, refreshTrigger} : DeckOfCardsProps) {

    const [deck, setDeck] = useState(getRandomVariant(CardVariant))

    useEffect(() => {
        setDeck(getRandomVariant(CardVariant))
    }, [refreshTrigger])

    return <>
    <div className="card-deck">
        <h1 className="deck-title">{AllCards[CardVariant].label}</h1>
        <div className="card-stack">
            {[...Array(4)].map((_c, i) => (
                <img className="card" style={{left: `${i * 15 + 10}px`}} src="src\media\card-back.png"></img>
            ))}
            <img className="card" style={{left: `${4 * 15 + 10}px`}} src={deck.imageUrl}
            onClick={() => setDeck(getRandomVariant(CardVariant))}></img>
            
            <p className="card-title">{deck.title}</p>
        </div>
        
        
    </div>
    </>
}

export default DeckOfCards