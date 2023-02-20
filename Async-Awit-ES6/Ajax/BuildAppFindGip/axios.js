const giphyAPIKey =  'VdGsgZ6Y2JZoJ65s9hc19sewTXEnfQDZ'
let container = document.getElementById('giphy_result')
const url = `https://api.giphy.com/v1/gifs/search?q=${giphyKeyWord}&api_key=${giphyAPIKey}`
async function searchimg(params) {
    let giphyKeyWord = document.getElementById('keyword').value
    console.log(url)
    try{
        const res = await axios.get(url);
        let imgObj = res.data.data
        console.log(imgObj)
        const imgsUrl = imgObj.map(imgObjUrl=>{
            return `<img src='${imgObjUrl.url}'/>`
        })
        console.log(imgsUrl)
        console.log(imgsUrl.join(''))
        container.innerHTML += imgsUrl.join('')
    }catch(e){
        console.error(e)
    }
}

function remove(){
    container.innerHTML = ''
}