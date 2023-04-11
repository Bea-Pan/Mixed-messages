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