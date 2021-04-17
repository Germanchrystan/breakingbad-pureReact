import React,{useState, useEffect} from 'react';
import axios from 'axios';

import './EpisodeDetail.css'
import Spinner from './spinner';

function EpisodeDetail({ match }){
    const [episode, setEpisode] = useState();
    const [characters, setCharacters] = useState([])

    const [isLoading, setIsLoading] = useState(true);
    let id=match.params.id;

    useEffect(() => {
        const fetchepisode = async() => { 
            const result = await axios(`https://www.breakingbadapi.com/api/episodes/${id}`);


            setEpisode(result.data[0]);
            console.log(episode);
            setCharacters(result.data[0].characters);
            setIsLoading(false);
        }
        fetchepisode();
    }, [])
    
    return(
        isLoading?<Spinner/>:
        <div className="episodeContainer">
            <div className="name">
                <h1>{episode.title}</h1>
                <h3>From Season {episode.season}</h3>
                <h3>Aired: {episode.air_date}</h3>
                <hr/>
                <h3>Featured Characters</h3>
                <ul className="featuredCharacters">
                    {
                        characters.map((c)=><li>{c}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default EpisodeDetail;