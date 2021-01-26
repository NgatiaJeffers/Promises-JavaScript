// EXERCISE LEVEL 1
const countriesAPI = 'https://restcountries.eu/rest/v2/all'
fetch(countriesAPI)
.then(response => response.json(), err => console.log(err))
.then(data => { //getting the data
    console.log(data)
})

const fetchData = async () => {
    try {
        const response = await fetch(countriesAPI)
        const countries = await response.json()
        console.log(countries )
        const capital = await response.json()
        console.log(capital)
        const population = await response.json()
        console.log(population)
        const launguages = await response.json()
        console.log(launguages)
        const area = await response.json()
        console.log(area)
    } catch (err) {
        console.log(err)
    }
}

console.log(fetchData())











// EXERCISE LEVEL 2
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

var catNames = fetch(catsAPI)
    .then(res => res.json, err => console.error(err))