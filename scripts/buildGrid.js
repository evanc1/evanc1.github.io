var p = {
    [
{"title": "Tales from EarthSea",
"author": "Ursula K. Le Guin",
"price": "$5.99"}
,{"title": "The Other Wind"
"author": "Ursula K. Le Guin",
"price": "$6.99"}
,{"title": "The Left Hand of Darkness",
"author":"Ursula K. Le Guin",
"price":"$9.20"}
    ]
}

for (var key in p) {
    if (p.hasOwnProperty(key)) {
        console.log(key + " -> " + p[key]);
    }
}

