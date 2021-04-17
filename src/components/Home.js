import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Home.css'
import Spinner from './spinner.js'


function Home () {
    const [quote, setQuote] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async() => {
            const result = await axios(`https://www.breakingbadapi.com/api/quote/random`);

            //console.log(result.data[0]); 
            setQuote(result.data[0]);
            setIsLoading(false);
            console.log(result.data);
            console.log(quote)
        }

        fetchItems();
    },[])

    return isLoading ?(<Spinner/>):(
        <div className="container">
            <h1>Quote of the Day:</h1>
            <hr/>
            <h2 className="quote">"{quote.quote}"</h2>
            <div>
                <h4 className="author">{quote.author}</h4>
                <h5 className="series">from {quote.series}</h5>
            </div>
        </div>
    )
}

export default Home;