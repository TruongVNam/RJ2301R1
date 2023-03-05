const openweathermapAPIKey = '4d86dc4bdc11c31ec2c4e653e04efd8b'
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