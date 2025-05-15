'use client';

import { useState } from 'react';
import { getCharacters } from 'rickmortyapi';

export default function CharacterSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await getCharacters({ name: query });
      setResults(res.data.results);
    } catch (err) {
      setError('Character not found!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          placeholder="Search characters..."
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 p-2 rounded border border-gray-600 bg-gray-900 text-white"
        />
        <button
          onClick={handleSearch}
          className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-yellow-300">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((char) => (
          <div key={char.id} className="bg-white/10 p-4 rounded text-white">
            <img src={char.image} alt={char.name} className="w-24 h-24 rounded-full mx-auto" />
            <h2 className="text-xl mt-2">{char.name}</h2>
            <p>Status: {char.status}</p>
            <p>Species: {char.species}</p>
            <p>Origin: {char.origin.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
