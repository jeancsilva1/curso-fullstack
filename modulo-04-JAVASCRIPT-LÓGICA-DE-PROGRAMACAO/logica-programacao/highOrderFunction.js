/*
Function tradicional

function greet (name) {
    return alert('Hello, ' + name);
}

greet('Jean')
*/

/*
Função ANONIMA

let greet = function (name){
    return alert('Hello, ' + name);
}
greet('Jean')
*/

//ARROW FUNCTION
const greet = (name) => 'Hello, ' + name

//HOF
function speakToMary(dialog){
    const text = dialog('Mary')
    return 'He says: ' + text
}

alert(speakToMary(greet))