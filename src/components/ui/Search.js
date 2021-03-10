import React, { useState } from 'react';
import './Search.css'


const Search = ({getQuery}) => {
    const [text, setText] = useState('');

    const onChange = (q) => {
        setText(q);
        getQuery(q);
    }

    return (
        <section>
            <form className="form-control">
                <input 
                    type='text' 
                    placeholder='Search Characters'
                    onChange={(e)=>onChange(e.target.value)}
                />
            </form>
        </section>
    )
}

export default Search;