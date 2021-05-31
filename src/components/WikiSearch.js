import React, { useState, useEffect } from 'react';
import { wikiSearch } from './apiClient';

const WikiSearch = () => {

    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]);
    const [debounceTerm, setDebounceTerm] = useState(term);

    const invokeSearch = (query) => {
        wikiSearch(query).then((response) => {
            setResults(response.query.search);
        });
    }

    useEffect(() => {
        if(debounceTerm) {
            invokeSearch(debounceTerm);
        }
            
        },[debounceTerm]
    );

    useEffect(() => {
        if(term && results.length === 0) {
            invokeSearch(term);
        } else {
            const timeoutId = setTimeout(()=> {
                setDebounceTerm(term);
            }, 200)
            return () => {
                clearTimeout(timeoutId);
            }
        }
    },[term])

    const renderResults = results.map((item) => {
            return (
                <div key={item.pageid} className="item">
                    <div className="right floated content">
                        <a href={`https://en.wikipedia.org?curid=${item.pageid}`} target="_new" className="ui primary button"> Go </a>
                    </div>
                    <div className="content">
                        <div className="header">{item.title}</div> 
                        <span dangerouslySetInnerHTML={{__html: item.snippet}}></span>
                    </div>
                </div>
            )
        })

    return (
        <>
            <form className="ui form">
                <div className="ui fluid input">
                    <input type="text" value={term} onChange={(e) => {setTerm(e.target.value)}}/>
                </div>
            </form>
            <div className="ui celled list">
                {renderResults}
            </div>
        </>
    )
}

export default WikiSearch;