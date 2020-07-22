import React from 'react'
import styles from './growl.css'

export const Growl = ({ active, message, onDismissed, timeout = 3000 }) => {
    const [state, setState] = React.useState(true)

    React.useEffect(() => {
        setState(true)

        if(timeout) {
            setTimeout(() => setState(false), timeout);
        }
    }, [active])

    const handleClick = () => {
        setState(false)
        onDismissed()
    }

    return (
        <div className={[styles.growl, (active && state) && styles.active].join(' ')}>
            {message}
            <div onClick={handleClick} className="growl-close"></div>
        </div>
    )
}

export function useGrowl() {
    // state of the growl
    const [growlActive, setGrowlActive] = React.useState(false)

    return [
        // the first arg is the state
        growlActive, 

        // the second arg is a fn that allows you to safely set its state
        (active) => {
            setGrowlActive(active)
        },
    ]
}