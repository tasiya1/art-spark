import { useEffect, useState } from "react"
import DeckOfCards, { type DeckVariant } from "./DeckOfCards"
import { AllCards, type CardType } from "../types"
import type { SavedCard, SavedCardsRecord } from "./SavedCards";
import Message, { type MessageProps } from "./Message";

export interface CardsPresentationProps {
    cardsToShow: CardType[];
    onBack: () => void;
}

export function getRandomVariant(deckName: DeckVariant) {
    const deck = AllCards[deckName]
    const randomValue = deck.variants[Math.floor(Math.random() * deck.variants.length)]
    return randomValue
}

export type Notification = {
    msg: string
    type: "good" | "bad" | "warning" | "notification"
}

function CardsPresentation({cardsToShow, onBack} : CardsPresentationProps) {

    const [cards, setCards] = useState<SavedCard[]>([])
    const [notification, setNotification] = useState<Notification | null>(null)

    const reloadCards = () => {
        setCards(prev => prev.map((card) => {
            return {...card, cardVariant: getRandomVariant(card.title)}
        }))
    }

    const saveCards = () => {
        const rawCurrentHistory = localStorage.getItem('artSparkSaved')
        let currentHistory: SavedCardsRecord[] = []

        if (rawCurrentHistory) {
            try {
                const parsed = JSON.parse(rawCurrentHistory)
                currentHistory = Array.isArray(parsed) ? parsed : []
            }
            catch (e) {
                console.error("error parsing cards history")
                currentHistory = []
                setNotification({msg: "error parsing cards history", type: "bad"})
            }
        }

        const newRecord : SavedCardsRecord = {
            savedCards: cards,
            id: crypto.randomUUID(),
            date: (new Date(Date.now())).toLocaleString()
        }

        const updatedHistory = [newRecord,...currentHistory]

        localStorage.setItem('artSparkSaved', 
            JSON.stringify(updatedHistory)
        )

        setNotification({msg: "combination successfully saved!", type: "good"})
    }

    const refreshCard = (key: CardType) => {
        setCards(prev => prev.map((card) => {
            if (card.title === key) {
                return {...card, cardVariant: getRandomVariant(card.title)}
            } return card;
        }))
    }

    useEffect(() => {
        const genCards : SavedCard[] = []
        cardsToShow.forEach((c) => {
            genCards.push({title: c, cardVariant: getRandomVariant(c)})
        })
        setCards(genCards)
    }, [])

    return <>

        <div className="menu-buttons">
            <button className="button-small button-back" onClick={onBack}></button>
            <button className="button-small button-reload" onClick={reloadCards}></button>
            <button className="button-small button-save" onClick={saveCards}></button>
        </div>

        <div className="decks-container">
        {cards.map((c, i) => (
            <DeckOfCards card={c} refreshCard={refreshCard}/>
        ))}
            
        </div>

        {notification && <Message notification={notification} onClose={() => setNotification(null)}/>}
    </>
}

export default CardsPresentation