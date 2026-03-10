import { AllCards, type CardType } from "../types"
import DeckOfCards from "./DeckOfCards"
import type { SavedCard } from "./SavedCards"

export type DailyChallengeProps = {
    onBack : () => void
}

function getSeedRandom(max: number) :number {

    const today = new Date()
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate()

    const x = Math.sin(seed) * 10000
    const r = x - Math.floor(x)
    return Math.floor(r * max)
}

function getDailyCombination() {
    const numberOfCombinations = getSeedRandom(4)
    const existing = Object.keys(AllCards) as CardType[]
    const combinations : SavedCard[] = []

    for (let i = 0; i < numberOfCombinations; i++) {
        const choice = existing.splice(getSeedRandom(existing.length), 1)[0]
        const cardsOfChoice = AllCards[choice].variants
        const randomCard = cardsOfChoice[getSeedRandom(cardsOfChoice.length)]
        combinations.push({title: choice, cardVariant: randomCard})
    }

    return combinations
}

function DailyChallenge({onBack} : DailyChallengeProps) {

    const todaysChallengeCards : SavedCard[] = getDailyCombination()

    return <>
        <div className="menu-buttons">
            <button className="button-small button-back" onClick={onBack}></button>
        </div>

        <h1 className="mode-header">Today's challenge:</h1>
        {todaysChallengeCards.map((c) => <DeckOfCards card={c} refreshCard={() => {}}/>)}
    </>
}

export default DailyChallenge