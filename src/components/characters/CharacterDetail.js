import React from 'react';

const CharacterDetail = ({ id }) =>{
    ///api/characters/${id}
    return (
        <div className='detail'>
            <img src={id.img} alt ='' />
            <hr/>
            <h1>{id.name}</h1>
        </div>
    )
}