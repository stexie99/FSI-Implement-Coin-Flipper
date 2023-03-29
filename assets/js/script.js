// TODO: Declare any global variables we need
let heads = 0
let headsPercent = 0
let tails = 0
let tailsPercent = 0
let coinFlip

document.addEventListener('DOMContentLoaded', function () {
    // TODO: Add event listener and handler for flip and clear buttons
    document.querySelector('#flip').addEventListener('click', function(){
        let coinFlip = Math.round((Math.random()))
        //console.log(coinFlip)
        if (coinFlip == 0){
            document.querySelector('#pennyImg').src = '/assets/images/penny-heads.jpg'
            heads++
            document.querySelector('#message').textContent='You flipped heads!'
            document.querySelector('#heads').textContent= heads} else {
            tails ++
            document.querySelector('#pennyImg').src = '/assets/images/penny-tails.jpg'
            document.querySelector('#tails').textContent= tails
            document.querySelector('#message').textContent='You flipped tails' 
            }
        //console.log(heads)
        //console.log(tails)
        let totalFlips = heads + tails
        if (heads === 0){
            headsPercent = 0;} else {headsPercent = Math.round(heads/totalFlips*100)}
        if (tails === 0){
            tailsPercent = 0;}else{tailsPercent = Math.round(tails/totalFlips*100)}
        document.querySelector('#heads-percent').textContent=`${headsPercent}%`
        document.querySelector('#tails-percent').textContent=`${tailsPercent}%`
    })
    //console.log(coinFlip)
    document.querySelector('#clear').addEventListener('click', function(){
        heads = 0
        tails = 0
        document.querySelector('#pennyImg').src = '/assets/images/penny-heads.jpg'
        document.querySelector('#heads-percent').textContent='0%'
        document.querySelector('#tails-percent').textContent='0%'
        document.querySelector('#heads').textContent='0'
        document.querySelector('#tails').textContent='0'
        document.querySelector('#message')="Let's get rolling"



    })
    
    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})