let recipe =
{
    "name": "Mashed Potatoes",
    "serves": 4,
    "ingredients": [
        {
            "name": "water"
        },
        {
            "name": "potatoes",
            "count": 2
        },
        {
            "name": "butter",
            "count": 2,
            "unit": "tablespoons"
        },
        {
            "name": "salt",
            "count": 0.5,
            "unit": "teaspoon"
        },
        {
            "name": "pepper",
            "count": 0.25,
            "unit": "teaspoons"
        },
        {
            "name": "garlic powder",
            "count": 2,
            "unit": "teaspoons"
        }
    ],
    "directions": [
        "Cut potatoes into half inch thick slices",
        "Add potatoes to a pot and cover with an inch of water.",
        "Bring the water to a boil over high heat, then reduce to a simmer and cover.",
        "Simmer for 20 minutes or until potatoes are fork tender.",
        "Drain water from potatoes, leaving the potatoes in the original pot.",
        "Add remaining ingredients to the pot with the potatoes.",
        "Mash potatoes until they reach the desired consistency.",
        "Serve immediately, or cover and refrigerate."
    ],
    "calories": 250,
    "healthy": true
}



console.log(recipe.ingredients.filter(i => i.name == "garlic powder")[0].count) //should print 2
console.log(recipe.healthy) //should print true
console.log(recipe.calories) //should print 250
console.log(recipe.directions[0]) //should print "Cut potatoes into half inch thick slices"

let animal = {

    "animals": [
        {
            "name": "Elephants",
            "weigh": 5,
            "unit": "tons",
            "living": [
                "africa",
                "asia"
            ],
            "endangered": true,
            "foods": [{
                "type": "herbs",
                "precent": 100
            }],
            "enmies": "Hunters",
            "delicious": 1
        },
        {
            "name": "cow",
            "weigh": 400,
            "unit": "kilogram",
            "living": [
                "asia",
                "europe",
                "amrica",
                "africa"
            ],
            "endangered": false,
            "foods": [{
                "type": "grass",
                "precent": 60
            },
            { "type": "tress",
              "precent": 40 }],
            "enmies": "humans",
            "delicious": 5
        },
        {
            "name": "gray wolf",
            "weigh": 40,
            "unit": "kilogram",
            "living": [
                "europe",
                "asia",
                "north america"
            ],
            "endangered": false,
            "foods": "meat",
            "enmies": "another wolfs",
            "delicious": 1
        },
        {
            "name": "squirrels",
            "weigh": 3,
            "unit": "kilogram",
            "living": [
                "africa",
                "asia",
                "europe",
                "amrica"
            ],
            "endangered": false,
            "foods": "nuts",
            "enmies": "big animals",
            "delicious": 2
        }
    ]
}
