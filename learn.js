// Callback
const doSomething = callback => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        callback('It did not go well', skills)
    }, 2000)
}

const callback = (err, result) => {
    if (err) {
        return console.log(err)
    }
    return console.log(result)
}

console.log(doSomething(callback));

// Promise Constructor
// SYNTAX
const promise = new Promise((resolve, reject) => {
    resolve('success')
    reject('failure')
})

// PROMISE
// const doPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const skills = ['HTML', 'CSS', 'JS']
//         if (skills.length > 0) {
//             resolve(skills)
//         } else {
//             reject('Something wrong has happened')
//         }
//     }, 2000)
// })

// doPromise
// .then(result => {
//     console.log(result)
// })
// .catch(error => console.log(error))


// PROMISE II
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        if (skills.indexOf('node') != -1) {
            resolve('fullsatck developer')
        } else {
            reject('Something wrong has happened')
        }
    }, 2000)
})

doPromise
.then(result => {
    console.log(result)
})
.catch(error => console.log(error))



// Async and Await
// const square = async function(n) {
//     return n * n
// }
// const value = await square(2) // Accessing a value frm th PROMISE


// FETCH API
const url = 'https://restcountries.eu/rest/v2/all' //API
fetch(url)
.then(response => response.json()) //accessing the API data as JSON
.then(data => { //getting the data
    console.log(data)
})
.catch(error => console.log(error))//handling error if something wrong happens

// ASYN and AWAIT
const fetchData = async () => {
    try {
        const response = await fetch(url)
        const countries = await response.json()
        console.log(countries)
    } catch (err) {
        console.log(err)
    }
}
console.log('===== async and await')
console.log(fetchData())