const images = [
    'images/a.jpg',
    'images/b.jpg',
    'images/c.jpg',
    'images/d.png',
    'images/e.jpg',
    'images/f.jpg',
    'images/h.jpg',
    'images/i.jpg'
]
let imgIndex = 0;
const imgElement = document.getElementById('slider-img')
setInterval(() => {
    if(imgIndex >= images.length){
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex]
    // console.log(imgUrl);
    imgElement.setAttribute('src', imgUrl)
    imgIndex++;
},1000)