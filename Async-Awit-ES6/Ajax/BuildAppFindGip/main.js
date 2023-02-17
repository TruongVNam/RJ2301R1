const giphyAPIKey =  'VdGsgZ6Y2JZoJ65s9hc19sewTXEnfQDZ'
console.log(giphyAPIKey);

function search(params) {
    let giphyKeyWord = document.getElementById('keyword').value
    const url = `https://api.giphy.com/v1/gifs/search?q=${giphyKeyWord}&api_key=${giphyAPIKey}`
    console.log(url)
    fetch(url)
    .then(res => console.log(res))
    .then(data => {
        resdata = data.json();
        console.log(resdata)
    })
    .catch(err => console.error(err))
}
