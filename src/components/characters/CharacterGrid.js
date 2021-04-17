import React from 'react';
import CharacterItem from './CharacterItem.js'
import Spinner from '../spinner.js'


const CharacterGrid = ({items, isLoading}) => {
    return isLoading ? (
        <h1></h1>
    ) : (
        <section className='cards'>
            {items.map((item) => (
                <CharacterItem key={item.char_id} item={item}></CharacterItem>
            ))}
        </section>
   )
}

export default CharacterGrid;

//OPERADOR TERNARIO
/*
isLoading ? ......(SI ES TRUE) : (Si)
*/

/*
if(isLoading){
    .....(SI es true)
} else {
    .....(si es false)
}
*/