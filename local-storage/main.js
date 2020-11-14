
/*
// Functions
localStorage.setItem('name', 'Shoobert');

// Object
localStorage.name = 'Shoobert';

// Object
localStorage['name'] = 'Shoobert';

localStorage['title'] = 'king';
const title = localStorage['title']

localStorage.userStorage = JSON.stringify ({
    darkMode: true,
    showSideNav: false,
    defaultResultCount: 9,
    latestMarks: {
        sectionA: 92,
        sectionB: 11
    },
    cart: [
        { id: 3112, count: 2 },
        { id: 812, count: 16 }
    ]
})

let printUsers = JSON.parse(localStorage.userStorage)
console.log(printUsers.userStorage)


//JS - Setting (all of these are valid)
localStorage.userStorage = JSON.stringify(userStorage)
localStorage.setItem('userStorage', JSON.stringify(userStorage))
localStorage['userStorage'] = JSON.stringify(userStorage)


//In the browser:
let data = JSON.parse(localStorage.userStorage)
data.cart[data.cart.length - 1].count
*/

const wisdom = []
let count = 0

$("#btn").on("click", function () {
    let input = $("#in").val()
    wisdom.push({ id: count, text: input })
    localStorage.wis = JSON.stringify(wisdom)
    $("#place").append(`<div class=post> 
    <span class=delete onclick=delet(${count})>X </span>${$("#in").val()}
    <br>
    </div>`)
    count++
})


const important = JSON.parse(localStorage.wis)
console.log(important.length)


const loading = function () {
    for (let i = 0; i < important.length; i++) {
        $("#place").append(`${important[i].text} <br>`)
    }
}



$("#remove").on("click", function () {
    localStorage.wis = JSON.stringify(undefined)
})


const delet = function (wisdomID) {
    for (let i = 0; i < wisdom.length; i++) {
        if (wisdom[i].id == wisdomID) {
            wisdom.splice(i, 1)
            localStorage.wis = JSON.stringify(wisdom)
        }
    }
    console.log(localStorage.wis)

}
/*
localStorage.wisdom = JSON.stringify(wisdom)
localStorage.setItem('wisdom', JSON.stringify(wisdom))
localStorage['wisdom'] = JSON.stringify(wisdom)*/


//let printwisdom = JSON.parse(localStorage.wisdom)
//console.log(printwisdom.wisdom)

































