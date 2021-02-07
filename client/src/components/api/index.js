import axios from 'axios';

export const fetchAlbums = async () => {
    const url = 'https://api.spotify.com/v1/albums'

    try {
        // const data = await axios.get('https://theaudiodb.p.rapidapi.com/trending.php?country=us&type=itunes&format=singles',
        const data = await axios.get('https://theaudiodb.p.rapidapi.com/mostloved.php?format=album',
        {headers: {'x-rapidapi-key':'5b93c8ef89msh13d522289f9dd32p14f28ajsndb77ddce454b', 'x-rapidapi-host': 'theaudiodb.p.rapidapi.com'}}
        )
        console.log(data.data.trending)
        // return data.data.trending
        return data.data.loved
    } catch (error) {
        console.log(error)
    }
}