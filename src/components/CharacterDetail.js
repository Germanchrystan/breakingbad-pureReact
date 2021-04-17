import React,{useState, useEffect} from 'react';
import axios from 'axios';

import './CharacterDetail.css'
import Spinner from './spinner';

function CharacterDetail({ match }){
    const [character, setCharacter] = useState({});
    const [occupations, setOccupations] = useState([])
    const [appearance,setAppearance] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let id=match.params.id;

    useEffect(() => {
        const fetchCharacter = async() => { 
            const result = await axios(`https://www.breakingbadapi.com/api/characters/${id}`);

            setCharacter(result.data[0]);

            setOccupations(result.data[0].occupation);
            setAppearance(result.data[0].appearance);
            console.log(appearance);
            setIsLoading(false);
        }
        fetchCharacter();
    }, [])
    
    return(
        isLoading?<Spinner/>:
        <div className="characterContainer">
            <div className="name">
            <h1>{character.name}</h1>
            </div>
            <div>
                <div className="detailsContainer">
                    <div className="img"> 
                        <img src={character.img}/>
                    </div>
                    <div>
                        <p><b>Nickname: </b>{character.nickname}</p>
                        <p><b>Birthday: </b>{character.birthday}</p>
                        <p><b>Status: </b>{character.status}</p>
                        <p><b>Portrayed by: </b>{character.portrayed}</p>
                        <div>
                            <p><b>Occupation: </b></p>
                            <ul>{
                                    occupations.map((o)=><li>{o}</li>)
                                }</ul>
                        </div>    
                        <div>
                            <p><b>Appeared in Seasons: </b></p>
                            <ul>{
                                    appearance.map((o)=><li>{o}</li>)
                                }</ul>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterDetail;