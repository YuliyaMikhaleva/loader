const files = document.querySelectorAll('[src], [url]')
const mediaCount = files.length
let progress = 0;
let percent = Math.round(100/mediaCount)
let loaderEl = document.querySelector('.loader-el')
let loaderText = document.querySelector('.loader-el__text')
if (mediaCount > 0 && loaderEl) {
  let loaderLine = document.querySelector('.loader-el__line')
  loaderLine.style.height = '5%'
  loaderText.innerText = '5%'
  for (let i = 0; i < mediaCount; i++) {
    let file = new Image();
    file.src = files[i].src
    file.onload = () => {
      progress += percent
      loaderText.innerText = progress + '%'
    };
    file.onerror = () => {
      progress += percent
      loaderText.innerText = progress + '%'
      loaderLine.style.height = progress + '%'
    }
  }
}

document.addEventListener('readystatechange', () => {
  let loaderEl = document.querySelector('.loader-el')
  if (document.readyState === 'complete' && loaderEl){
    let loader = document.querySelector('.loader-el')
    let loaderLine = document.querySelector('.loader-el__line')
    let loaderText = document.querySelector('.loader-el__text')
    loaderText.innerText = '100%'
    loaderLine.style.height = '100%'
    setTimeout(() => {
      loader.style.opacity = '0'
      loader.style.pointerEvents = 'none'
    }, 1000)
  }

})
