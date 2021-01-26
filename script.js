// EXERCISE LEVEL 1
const countriesAPI = 'https://restcountries.eu/rest/v2/all'
fetch(countriesAPI)
.then(response => response.json()
.then(data => {
    console.log(data)
}))
.catch(error => console.log(error))


const fetchData = async () => {
        const response = await fetch(countriesAPI)

        if(response.status !== 200) {
            throw new Error('cannot fetch the data')
        }

        const data = await response.json()

        return data


}

console.log('===== async and await')
fetchData()
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected:', err.message))









// EXERCISE LEVEL 2
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
fetch(catsAPI)
.then(response => response.json()
.then(data => {
    console.log(data)
}))
.catch(error => console.log(error))


const fData = async () => {
        const response = await fetch(catsAPI)

        if(response.status !== 200) {
            throw new Error('cannot fetch the data')
        }
        
        const data = await response.json()

        return data


}

console.log('===== async and await')
fData()
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected:', err.message))
