/*
//Exercise1
const fetch = function (isbn) {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
        success: function (data) {
         console.log(data)
};

fetch("9780439023528")


//Exercise 2

const fetch = function (isbnqueryType,queryValue) {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${isbnqueryType}:${queryValue}`,
        success: function (data) {
            console.log(data)

        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    })
}

fetch("title", "How to Win Friends and Influence People")


//Exercise 3

const fetch = function (isbnqueryType,queryValue) {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${isbnqueryType}:${queryValue}`,
        success: function (data) {
            let array = data.items
            console.log(array)
           for( item of array){
               let title = item.volumeInfo.title
               let authors = item.volumeInfo.authors
               let into = item.volumeInfo.industryIdentifiers
               for(int of into){
                let go =  int.identifier
                console.log("the title is: " + title + " by " +authors + " and the isbn is :" +go)
            }
           }
        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    })
}

fetch("title", "How to Win Friends and Influence People")

//Exercise 3

const fetch = function (cat) {
    $.ajax({
        method: "GET",
        url:`http://api.giphy.com/v1/gifs/search?q=${cat}&api_key=j2Rcc2eiIWFfUwuJCusU5s8gjIJ92EML&limit=5`,
        success: function (data) {
            console.log(data.data)
            for(giph of data.data){
                let nice = giph.embed_url
                $("#main").append(`<iframe src="${nice}" title="nice giph"></iframe>`)
            }
        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    })
}
*/
//Exercise 5

const fetch = function () {
    $.ajax({
        method: "GET",
        url:`http://api.giphy.com/v1/gifs/search?q=${$("#enter").val()}&api_key=j2Rcc2eiIWFfUwuJCusU5s8gjIJ92EML&limit=1`,
        success: function (data) {
            console.log(data.data)
            for(giph of data.data){
                let nice = giph.embed_url
                $("#main").append(`
                <iframe src="${nice}" title="nice giph"></iframe>
                <button class=favor>add</button>
                <iframe src="${nice}" title="nice giph"></iframe>
                <button class=favor>add</button>
                <iframe src="${nice}" title="nice giph"></iframe>
                <button class=favor>add</button>
                <iframe src="${nice}" title="nice giph"></iframe>
                <button class=favor>add</button>
                <iframe src="${nice}" title="nice giph"></iframe>
                <button class=favor>add</button>
                `)
            }
        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    })
}

$("#btn").on("click",fetch)

