export const getGifs = async(category) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit=10&api_key=z8L84cRhMVVOIbQuduH0R8OxY88PESaX`;
    const respuesta = await fetch( url );
    const { data } = await respuesta.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url, //Se pone el signo de interrogacion para asegurar que viene la informacion, y lo utiliza
        }
        
    });

    return gifs;
}
