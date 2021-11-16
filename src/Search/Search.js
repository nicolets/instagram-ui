import React, { useEffect, useState } from 'react';
import { search } from '../services/user.service';
import './Search.scss';
import SearchResult from './SearchResult/SearchResult';

function Search(props) {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (!query.trim().length) { //if its not positive - its 0 
            setResults([]);
            return;
        }
        let timer = setTimeout(async () => {
            await search(query)
            .then(usersFound => setResults(usersFound))
            .catch(e => console.log(e))
        }, 250);
        return () => clearTimeout(timer);
    }, [query]);

    return (
        <div className="Search">
            <div className="Search__header">
                <h1>Search</h1>
                <form>
                    <input className="Search__input" value={query} placeholder={'🔍 Search...'} onChange={e => setQuery(e.target.value)} />
                </form>
            </div>
            <hr />
            <div>
                {results.map(result => <SearchResult user={result} key={result._id} />)}
            </div>
        </div>
    );
}

export default Search;