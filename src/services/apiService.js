import * as tokenService from '../services/tokenService';

async function searchBar(query) {
    try {
        const res = await fetch(`api/bar/${query}`, {
            headers: {
                'Authorization': `Bearer ${tokenService.getToken()}`
            }
        })
        const data = await res.json()
        return data
    } catch(err) {
        throw err
    }
}

export {
    searchBar,
}