import { useEffect, useState } from "react"
import type { Notification } from "./CardsPresentation"

export type MessageProps = {
    notification: Notification,
    onClose: () => void
}

function Message({notification, onClose} : MessageProps) {
    const [isFading, setIsFading] = useState(false)
    useEffect(() => {
        const exitTimer = setTimeout(() => {
            setIsFading(true)
        }, 3000);

        const removeTimer = setTimeout(() => onClose(), 3500);

        return () => {
            clearTimeout(exitTimer)
            clearTimeout(removeTimer)
        }
    }, [onClose])

    return <div className={`message ${notification.type} ${isFading? 'fadeout' : 'fadein'}`}>
        <span>{notification.msg}</span>
    </div>
}

export default Message