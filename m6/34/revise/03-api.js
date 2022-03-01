const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = counties => {
    // console.log(counties);

    // for(const country of counties){
    //     console.log(country);
    // }

    // for(let i = 0; i <counties.length; i++ ){
    //     console.log(counties);
    // }

    // counties.forEach( country => {
    //     console.log(country);
    // })

    const countriesDiv = document.getElementById('countries')
    counties.forEach( country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('countryList')
        
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name}')">Details</button>
        `

        // const h3 = document.createElement('h3');
        // h3.innerText = country.name;
        // div.appendChild(h3)

        // const p = document.createElement('p');
        // p.innerText = country.capital
        // div.appendChild(p)

        countriesDiv.appendChild(div)
    })
}

const loadCountryByName = name => {
    // console.log(name);
    const url = `https://restcountries.com/v2/name/${name}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data[0]))

}