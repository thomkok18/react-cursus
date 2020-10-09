import React, {useState, useEffect} from "react";
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term)
    const [results, setResults] = useState([]);

    // console.log('I run with every render');

    // useEffect(() => {
    //     console.log('I only run once after render');
    // }, []);

    // useEffect(() => {
    //     console.log('I run after every render and at initial render');
    // });

    // useEffect(() => {
    //     console.log('I run after term changes');
    // }, [term]);

    useEffect(() => {
        let timerId = null;

        if (term) {
            timerId = setTimeout(() => {
                setDebouncedTerm(term);
            }, 500);
        }

        return () => {
            clearTimeout(timerId);
        };
    }, [term]);

    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            });

            setResults(data.query.search);
        };

        search();
    }, [debouncedTerm]);

    const changeTerm = (term) => {
        setTerm(term);
    }

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className='item'>
                <div className='right floated content'>
                    <a className='ui button' href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
                <div className='content'>
                    <div className='header'>
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}/>
                </div>
            </div>
        );
    })

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Search Term</label>
                    <input className='input' value={term} onChange={e => changeTerm(e.target.value)}/>
                </div>
            </div>
            <div className='ui celled list'>{renderedResults}</div>
        </div>
    );
}

export default Search;