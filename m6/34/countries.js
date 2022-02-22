const loadCountries = () => {
    // fetch('https://restcountries.com/v3.1/all')
    fetch('https://restcountries.com/v2/all')
    // fetch('https://restcountries.com/v3.1/name/all')
    // fetch('https://restcountries.com/v3.1/currency/all')
    // fetch('https://restcountries.com/v3.1/currency/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = counties => {
    // for(const country of counties){
    //     console.log(country);
    // }
    const countiesDiv = document.getElementById('countries');
    counties.forEach(country => {
        // console.log(country);
        const div = document.createElement('div')
        div.classList.add('country')

        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick = "loadCountryByName('${country.name}')">Details</button>
        `
        // const h3 = document.createElement('h3')
        // h3.innerText = country.flag;
        // div.appendChild(h3)

        // const p = document.createElement('p')
        // p.innerText = country.capital;
        // div.appendChild(p)

        countiesDiv.appendChild(div)
    });
}
const loadCountryByName = (name) => {
    const url = `https://restcountries.com/v2/name/${name}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country => {
    console.log(country);
    const countryDiv = document.getElementById('country-detail')
    countryDiv.innerHTML = `
    <h4>${country.name}</h4>
    <p>population: ${country.population}</p>
    <img width="200px" src="${country.flag}">
    `
}