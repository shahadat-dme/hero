const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(res => displayQuote(res))
}

const displayQuote = (quote) => {
    // console.log(quote);
    const quoteElement = document.getElementById('quote')
    quoteElement.innerText = quote.quote


}