function generateRandomNubmer(sum) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
}

const collectiveWisdom = {
    signInfo: [ 'zvezda', 'mesec', 'sunce', 'kometa'],
    fortuneOutput: ['nesreca', 'losa sreca', 'ok sreca', 'dobra sreca', 'super sreca'],
    advice: ['idi da jedes', 'ne citaj ovo', 'igraj vise', 'ne veruj nikome']
}

//Store the 'wisdom' in an array
let personalWisdom = []

//Iterate over the object
for(let prop in collectiveWisdom) {
    let option = generateRandomNumber(collectiveWisdom[prop].lenght)

    //use the object's properties to customize the message being added to personalWisdom 
    switch(prop) {
        case 'singInfo':
            personalWisdom.push(`Tvoj znak je "${collectiveWisdom[prop][optionIdx]}".`)
            break
        case 'fortuneOutput':
            personalWisdom.push(`Ti imas: "${collectiveWisdom[prop][optionIdx]}".`)
            break
        case 'advice':
            personalWisdom.push(`Ti bi trebalo: "${collectiveWisdom[prop][optionIdx]}".`)
            break
        default:
            personalWisdom.push('Nedovoljno informacija.')          
    }
}

function formatWisdom(wisdom) {
    // (-(-_(-_-)_-)-)
    const formatted = personalWisdom.join('\n')
    console.log(formatted)
}
formatWisdom(personalWisdom);