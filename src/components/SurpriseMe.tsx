import { AllCards, type CardType } from "../types"
import CardsPresentation from "./CardsPresentation"
import DeckOfCards from "./DeckOfCards"
import type { SavedCard } from "./SavedCards"

function randomInt(max: number) {
    return Math.floor(Math.random() * max)
}

function getRandomCardTypes() {
    let numberOfCombinations = randomInt(5)
    if (numberOfCombinations == 0) numberOfCombinations = 1

    const existing = Object.keys(AllCards) as CardType[]
    const combinations : CardType[] = []

    for (let i = 0; i < numberOfCombinations; i++) {
        const choice = existing.splice(randomInt(existing.length), 1)[0]
        combinations.push(choice)
    }

    return combinations
}

export type SurpriseMeProps = {
    onBack: () => void
}

function SurpriseMe({onBack} : SurpriseMeProps) {

    const cardTypes : CardType[] = getRandomCardTypes()

    return <CardsPresentation cardsToShow={cardTypes} onBack={onBack}/>
}

export default SurpriseMe