const giphyAPIKey =  'VdGsgZ6Y2JZoJ65s9hc19sewTXEnfQDZ'
let container = document.getElementById('giphy_result')
console.log(giphyAPIKey);

function searchgiphy(params) {
    let giphyKeyWord = document.getElementById('keyword').value
    const url = `https://api.giphy.com/v1/gifs/search?q=${giphyKeyWord}&api_key=${giphyAPIKey}`
    console.log(url)
    fetch(url)
    .then(res => {
        data = res.json()
        .then(data => {
            const arr = data.data
            const urlArr = arr.map(item => {
                const img = document.createElement('img')
                img.src = item.url
                container.appendChild(img)
            })
            // console.log(urlArr.join(''))
            // container.innerHTML += urlArr.join('')
            // container.innerHTML += urlArr.join('');
            // return urlArr
        })
        // .then(urlArr => {
        // });
    })
    // .then(data => {
    //     container.innerHTML+= data.join('');
    // })
    .catch(err => console.error(err))
}

function remove(){
    container.innerHTML = ''
}
