
export default async function requestAPI(artist) {
    try {
        const { results } = await fetch(`https://itunes.apple.com/search?term=${artist}`).then((res) => res.json())
        return results;
    }
    catch(e) {
        global.alert('Not found, try again!');
    }
}
