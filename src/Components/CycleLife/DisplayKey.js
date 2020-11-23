import React, {useState, useEffect} from 'react';

function DisplayKey () {

    const [keyCode, setKeyCode] = useState('')


    const handleKeyCode = (e) => {
        setKeyCode(e.code)
    }

    useEffect(() => {
        document.addEventListener('keyup', handleKeyCode)

        //nettoyage memoire
        return ()=> {
            document.removeEventListener('keyup', handleKeyCode)
        }
    }, [])

    return (
        <div>
            <h1> {keyCode}</h1>
        </div>
    )
}

export default DisplayKey;