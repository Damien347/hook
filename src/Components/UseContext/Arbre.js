import React, { Component } from 'react';
import Pere from './Pere';
import { MyContext, ColorContext } from './MyContext'; // on importe nos contexts, dans lequel on met l'element parent le plus haut

class Arbre extends Component {
    state = {
        user: {
            name: 'damien',
            age: 29

        }
    }

    // on imbrique un context dans un autre (colorContext dans MyContext), dans lequel on met notre element parent le plus haut
    render() {
        return (
            <MyContext.Provider value={this.state.user} >
                <ColorContext.Provider value={'red'}>
                    <Pere />
                </ColorContext.Provider>

            </MyContext.Provider>

        )
    }
}

export default Arbre;