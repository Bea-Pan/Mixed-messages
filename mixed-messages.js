//First part of the message - lifeSphere
function randomOutput(array){
    return array[Math.floor(Math.random()*array.length)]
}

function lifeSphere(){
    let sphere = ['finances', 'family', 'career', 'love life'];
    let random = randomOutput(sphere)
    return random
}

//Second part of the message - Inspirational Quote

function inspirationalQuote(){
    let quote =['"You miss 100% of the shots you don\'t take"-Wayne Gretzky', '"Do one thing everyday that scares you"-Eleanor Roosevelt', '"If you have everything under control, you\'re not moving fast enough"-Mario Andretti', '"It does not matter how slowly you go as long as you don\'t stop"-Confucius', '"Ever tried. Ever failed. No matter. Try again. Fail again. Fail better"-Samuel Beckett'];
    let random = randomOutput(quote)
    return random
};

//Third part of the meessage - advice

function advice(){
    let adv = ['first take a break and then evaluate all the options.','ask your best friend to help.','keep it a secret for now and act just by yourself.','compare opinions of your three best friends.']
    let random = randomOutput(adv);
    return random;
}

function allWisdomTogether(){
    return `This relates to the problem you are dealing with in your *${lifeSphere()}*, the quote for you to consider is:\n\n ${inspirationalQuote()}\n\n To resolve your problem you should ${advice()}`
}``
console.log(allWisdomTogether())