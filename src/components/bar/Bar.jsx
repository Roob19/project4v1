import React, { useState } from 'react';
import { BeerSearch } from '../utilities/beerSearch/beerSearch';

const Bar = () => {
    const [formData, setFormData] = useState({query: ''});
    const [results, setResults] = useState([]);
    const [status, setStatus] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            setStatus(false);
            const results = await BeerSearch(formData.query);
            results.businesses ? setResults(results.businesses) : setStatus(true);
        } catch(err) {
            setStatus(true)
        }
    }

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const { queryBeer } = formData;

    if (status) {
        return (
            <div>
                <p>Try entering a different location format</p>
                <form className='searchForm' 
                    autoComplete='off' 
                    onSubmit={ handleSubmit }
                >
                    <label>Enter a location: </label>
                    <input className='location-input'
                        placeholder='zip code' 
                        type='text' 
                        value={ queryBeer } 
                        name='query' 
                        onChange={ handleChange } 
                    />
                    <button className='beer-search'>BEER</button>
                </form>
            </div>
        )
    } else {
        return (
            <>
                <div>
                    <p>Where're we going and who's driving?</p>
                    <form className='searchForm' 
                        autoComplete='off' 
                        onSubmit={ handleSubmit }
                    >
                        <label>Enter a location: </label>
                        <input className='location-input'
                            placeholder='zip code' 
                            type='text' 
                            value={ queryBeer } 
                            name='query' 
                            onChange={ handleChange } 
                        />
                        <button className='beer-search'>BEER</button>
                    </form>
                </div>

                <div className='api-answer'>
                    { results.length ? 
                        <>
                            <div className='card-parent'>
                                {results.map((bar, idx) => 
                                    <div className='card-child' key={bar._id}>
                                        <div className='card-header'>
                                            <img src={bar.image_url} alt={bar.alias} />
                                        </div>
                                        {bar.name && <h3 className='card-header'>{bar.name}</h3>}
                                        <p>{bar.location.display_address}</p>
                                        <p>{bar.phone}</p>
                                        <p>Rating: {bar.rating}</p>
                                        <p>Price: {bar.price}</p>
                                    </div>
                                )}
                            </div>
                        </>
                        :
                        <h3></h3>
                    }

                    <div>

                    </div>
                </div>
            </>
        )
    }
}

export default Bar;