import React, {useState, useEffect} from 'react';

function CycleLife() {

    const [count, setCount] = useState(0)

    const [name, setName] = useState('')

//useEffect combine componentdidmount, didupdate et willunmont
    useEffect(() => {
        console.log('mis a jour titre')
        document.title = `Vous avez cliquez ${count} fois`
    }, [count]) 
    //le second parametre [count] permet de ne pas recharger unitilement useEffect, mais seulement quand count est modifié, pas l'input
    // si ce seond parametre est vide [], alors seulement le comportement componentdidmount sera lancé

    return (
        <div>
            <h1> {count} </h1>
            <input type='text' value={name} onChange={e => setName(e.target.value)} />
            <button onClick={()=> setCount(count +1)}> click </button>
        </div>
    )
}
export default CycleLife;