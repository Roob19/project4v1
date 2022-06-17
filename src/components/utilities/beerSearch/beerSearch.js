import axios from 'axios';

function BeerSearch (req, res) {
    axios.get(`https://api.yelp.com/v3/businesses/search?location=95742&radius=39999&categories=beergardens&sort_by=rating`, 
    {
        headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_YELP_TOKEN}`
        }
    })
    .then(response => res.json(response.data))
    .catch(err => {
        res.status(500).json(err)
    })
}

export {
    BeerSearch
}
