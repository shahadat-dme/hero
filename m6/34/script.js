const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    // .then(data => console.log(data));
    .then(data => displayQuote(data))
}
const displayQuote = (quote) => {
    // console.log(quote);
    // console.log(quote.quote);
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote.quote

}