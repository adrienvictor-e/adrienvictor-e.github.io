import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './ui/Header';
import CharacterGrid from './characters/CharacterGrid';
import Search from './ui/Search';
import './ChesperitoApp.css';

const ChesperitoApp = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      try {
        const result = await axios(`${process.env.PUBLIC_URL}/data/chespirito-characters.json`);

        const filteredItems = result.data.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        );

        setItems(filteredItems);
      } catch (error) {
        console.error('Error fetching characters:', error);
        setItems([]);
      }
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <>
      <div className="chespirito-container">
        <Header />
        <Search getQuery={(q) => setQuery(q)} />
        <CharacterGrid isLoading={isLoading} items={items} />
      </div>
    </>
  );
};

export default ChesperitoApp;
