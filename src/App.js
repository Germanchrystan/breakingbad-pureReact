import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CharacterGrid from './components/characters/CharacterGrid.js';
import Header from './components/ui/Header.js';
import Search from './components/ui/Search.js';
import './App.css';

const App = () => {
  const [items, setitems] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(()=> {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      console.log(result.data);
      setitems(result.data);
      setIsLoading(false);
    }
    fetchItems();
  }, [query])

  return (
    <div className="container">
      <Header/>
      <Search getQuery={(q) =>setQuery(q) }/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
