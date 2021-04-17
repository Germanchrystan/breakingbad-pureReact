import React, { useState } from 'react';
import './Search.css'


const Search = ({getQuery}) => {
    const [text, setText] = useState('');

    const onChange = (event) => {
        
        console.log(event)
        setText(event.target.value);
        getQuery(event.target.value);
    }

    return (
        <section>
            <form className="form-control">
                <input 
                    name = "Buscador"
                    type='text' 
                    placeholder='Search Characters'
                    onChange={(e)=>onChange(e)}
                />
            </form>
        </section>
    )
}

export default Search;