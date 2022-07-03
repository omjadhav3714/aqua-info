export const fishListOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'list-of-freshwater-aquarium-fish-species.p.rapidapi.com'
    }
};


export const fetchData = async (url, options) => {
    const respose = await fetch(url, options);
    const data = await respose.json();
    return data;
}