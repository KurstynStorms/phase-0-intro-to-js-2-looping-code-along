// Code your solutions in this file
const names = [ 'Lisa', 'Kaitlin', 'Jan' ]

function writeCards(names, surprise) {
    const cards = []
    for (let i = 0; i < names.length; i++){
        cards.push(`Thank you, ${names[i]}, for the wonderful ${surprise} gift!`)
    }
    return cards
}
function countDown(number){
    let integer = number 
    while (integer >= 0) {
    console.log(integer--)
    }
}   