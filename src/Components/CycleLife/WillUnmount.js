import React, { useState } from 'react';

import DisplayKey from './DisplayKey';

function WillUnmount () {

    const [show, setShow] = useState(true);

    const btnDisplay = show ? 'Cacher' : 'Afficher';
    return (
        <div>
            <button onClick={() => setShow(!show)}>{btnDisplay}</button>
            
            {
                show && <DisplayKey />
            }
        </div>
    )
}

export default WillUnmount;