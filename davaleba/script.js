let davaleba = 'iphone 15'

switch(davaleba) {
    case 'iphone 15':
        console.log('ჯამში: 2400ლარი')
        break;
    case 'iphone 14 pro':
        console.log('ჯამში: 2100ლარი')
    break;
    case 'iphone 14':
        console.log('ჯამში: 1800ლარი')
    break;
    case 'iphone 13':
        console.log('ჯამში: 1300ლარი')
    break;
    case 'iphone 12':
        console.log('ჯამში: 800ლარი')
    break;
    case 'iphone 11':
        console.log('ჯამში: 500ლარი')
    break;
    default:
        console.log('ეგ ჯერ არ გვაქ ჩვენ მაღაზიაში')
}

let saxeli = ['lela','gela','jima','dato','nodo']

saxeli.shift()
saxeli.push ('lela')



if (saxeli [2] == "lela") {
    console.log( "lela")
}
else if (saxeli [2] == "gela") {
    console.log ("gela")
}

else if (saxeli [2] == "jima") {
    console.log ("jima")
}

else if (saxeli [2] == "dato") {
    console.log ("dato")
}
else {
    console.log ("nodo")
}