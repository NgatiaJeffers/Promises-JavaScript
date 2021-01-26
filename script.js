// EXERCISE LEVEL 1
const countriesAPI = 'https://restcountries.eu/rest/v2/all'
fetch(countriesAPI)
.then(response => response.json()
.then(data => {
    
}))
.catch(error => console.log(error))








// EXERCISE LEVEL 2
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
fetch(catsAPI)
.then(response => response.json()
.then(data => {
    console.log(data)
}))
.catch(error => console.log(error))