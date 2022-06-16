import React, { useState } from 'react';
import { BeerSearch } from '../../../controllers/beerSearch';

const Bar = () => {
    const [formData, setFormData] = useState({query: ''});
    const [results, setResults] = useState([]);
    const [status, setStatus] = useState(false);

    
}