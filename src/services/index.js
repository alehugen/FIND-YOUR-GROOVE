
export default async function requestAPI(artist) {
    const request = await fetch(`https://itunes.apple.com/search?term=${artist}`);
    const response = await request.json();
    return response.results;
}
