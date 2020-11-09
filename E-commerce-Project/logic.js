
const cart = [{ name: "Coffe", count: 1 }]
const products = [
    { name: "Coffe", price: 15, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/800px-A_small_cup_of_coffee.JPG" },
    { name: "Tea", price: 15, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Turkish_tea2.jpg/800px-Turkish_tea2.jpg" },
    { name: "Chocolate milk", price: 10, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Hot_chocolate_p1150797.jpg/800px-Hot_chocolate_p1150797.jpg" },
    { name: "Water", price: 5, img: "https://static.timesofisrael.com/www/uploads/2018/01/water-pinkomelet.jpg" }
]

const removeFromCart = function () {
    let findInCart = cart
    let tmp = $(this).closest(".item").find(".theItem").data().name
    for (let i = 0; i < findInCart.length; i++) {
        if (findInCart[i].name === tmp) {
            findInCart[i].count--
            getCart()
            ItemsInCart()
            return
        }
    }
}


const deleteFromCart = function () {
    let findInCart = cart
    let tmp = $(this).closest(".item").find(".theItem").data().name
    for (let i = 0; i < findInCart.length; i++) {
        if (findInCart[i].name === tmp) {
            findInCart.splice(i, 1)
            getCart()
            ItemsInCart()
            return
        }
    }
}

const addToCart = function () {
    let findInCart = cart
    let tmp = $(this).closest(".product").find(".product-text").data().name
    let coun = 1
    for (let i = 0; i < findInCart.length; i++) {
        if (findInCart[i].name === tmp) {
            findInCart[i].count++
            ItemsInCart()
            return
        }
    }
    cart.push({ name: tmp, count: coun })
    return
}

const aboutUs = function () {
    $(".main").empty()
    $(".main").append(`
     <br>
     <div> We are a cafe that specializes in making great drinks! </div>
     <div> It all started when Grandpa Yitzhak opened the cafe 50 years ago. </div>
     <div> After being discharged from the army and fighting in the Yom Kippur War. </div>
     <div> Grandpa Yitzhak set up the enterprise of his life and now everyone can taste the drinks </div>
     <div> passed down from generation to generation. </div>
     <br>
     <img src="https://static.wikia.nocookie.net/friends/images/d/d0/CentralPerk.jpg/revision/latest/scale-to-width-down/340?cb=20160613025117"
     alt=CoffeHousePic>
     `)
}

const getProducts = function () {
    $(".main").empty()
    $(".main").append(`<h3 style="font: large; font-family: Arial, Helvetica, sans-serif;">Please choose your drink:</h3>`)
    for (let i = 0; i < products.length; i++) {
        const productBox = $(`
    <div class=product>
    <div class=product-text data-name=${products[i].name}><b>${products[i].name}</b></div>
    <div class=product-price> Price: ${products[i].price} $ </div>
    <img class=product-img src=${products[i].img}>
    <button class=add> Add To Cart </button>
    </div>
    `)
        $(".main").append(productBox)
    }
}


const getCart = function () {
    $(".main").empty()
    $(".main").append(`
<h3 style="font: large; font-family: Arial, Helvetica, sans-serif;">
 Your cart <i class="fas fa-shopping-cart"></i></h3>`)
    for (let i = 0; i < cart.length; i++) {
        const cartBox = $(`
    <div class=item> 
    <div class=theItem data-name=${cart[i].name}> <b>Name:</b>${cart[i].name}</div>
    <br>
    <span> <b>Items:</b> ${cart[i].count}</span>
    <span class=removeItem><i class="fas fa-minus-circle"></i></span>
    <div class=delete>Delete</i></div>
    </div>
    `)
        $(".main").append(cartBox)
    }

}

const ItemsInCart = function () {
        $("#cart").empty()
        console.log(cart)
        let count =0
        for(let item of cart){
            count+=item.count
        }
        let counter =  $(`<div class=incart>
        <i class="fas fa-shopping-cart"></i>
        ${count}</div>`)
        $("#cart").append(counter)
}

$(".main").on("click", ".removeItem", removeFromCart)
$(".main").on("click", ".delete", deleteFromCart)
$(".main").on("click", ".add", addToCart)
$("#AllProducts").on("click", getProducts)
$("#AboutUs").on("click", aboutUs)
$("#CartPage").on("click", getCart)

ItemsInCart()
