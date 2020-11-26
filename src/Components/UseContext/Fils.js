import React, {useContext} from 'react';

import {MyContext, ColorContext} from './MyContext'; // on import les contextes dans chaque composant dans lesquel on en a besoin


const Fils = ()=> {

    const user = useContext(MyContext)
    const color = useContext(ColorContext) // au lieu d'utiliser ici Context.consumer, on utilise useContext (hook)
    return (
        <div style={{color: color}} >
            <ul>
                <li> Nom: {user.name} </li>
                <li> Age: {user.age} </li>
            </ul>
        </div>
    )
}

export default Fils;