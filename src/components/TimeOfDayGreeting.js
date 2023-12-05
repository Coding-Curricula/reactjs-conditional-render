import React, { useState } from 'react'

export default function TimeOfDayGreeting() {
    // set state for the time of day with a greeting
    const [timeOfDay, setTimeOfDay] = useState('night');

    // tenerary operator example
    const greeting = timeOfDay === 'night' ? 'Ternary - Good night' : 'Ternary - Good morning';

    return (
        <div>
            {greeting}

            {/* Show "Have a great night" ONLY if it is night time */}
            {timeOfDay === 'night' && <p>Circuit Breaker - Have a great night</p>}

            {timeOfDay === 'morning' && <p>Circuit Breaker - Have a great morning</p>}

            {/* If/Else example - to include afternoon */}
            {(() => {
                if (timeOfDay === 'night') {
                    return <p>If/Else - Have a great night</p>
                } else if (timeOfDay === 'morning') {
                    return <p>If/Else - Have a great morning</p>
                } else {
                    return <p>If/Else - Have a great afternoon</p>
                }
            })()}

            {/* Buttons to change the time of day */}
            <button onClick={() => setTimeOfDay('night')}>Night</button>
            <button onClick={() => setTimeOfDay('morning')}>Morning</button>
            <button onClick={() => setTimeOfDay('afternoon')}>Afternoon</button>
        </div>
    )
}
