//First part of the message - lifeSphere
//const lifeSphere =  ['finances', 'family', 'career', 'love life'];

function lifeSphere(){
    let sphere = Math.floor(Math.random()*4)
    
    switch(sphere){
        case 0:
            return 'finances';
            break;
        case 1: 
            return 'family';
            break;
        case 2:
            return 'career';
            break;
        case 3:
            return 'love life';
    }
}

console.log(lifeSphere());

//Second part of the message - Inspirational Quote

function inspirationalQuote(){
    let quote = Math.floor(Math.random()*5)

    switch(quote){
        case 0:
            return '"You miss 100% of the shots you don\'t take"-Wayne Gretzky';
            break;
        case 1: 
            return '"Do one thing everyday that scares you"-Eleanor Roosevelt';
            break;
        case 2:
            return '"If you have everything under control, you\'re not moving fast enough"-Mario Andretti';
            break;
        case 3:
            return '"It does not matter how slowly you go as long as you don\'t stop"-Confucius';
            break;
        case 4:
            return '"Ever tried. Ever failed. No matter. Try again. Fail again. Fail better"-Samuel Beckett';
            break;
    }
}
console.log(inspirationalQuote())

//Third part of the meessage - advice

function advice(){
    let adv = Math.floor(Math.random()*4)
    switch(adv){
        case 0:
            return 'drop everything and do it!';
            break;
        case 1:
            return 'in this case ask your best friend to help';
            break;
        case 2: 
            return 'keep it a secret for now';
            break;
        case 3:
            return 'not leave aything to a chance!'
    }
}

console.log(advice())