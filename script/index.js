
// Get a random number factor. Broken out in case I want to generate them another way
function getRandomFactor(){
    return Math.random();
}


function rollDie(howMany,sides){
    let results = []
    for (let i = 0; i < howMany; i++){
        results.push(Math.ceil(getRandomFactor() * sides))
    }

    return results
}



function debugDieRolls(howMany, sides){
    console.log("Starting debug")

    let rollResults = rollDie(howMany,sides)

    let resultsSummary = {}
    for (roll of rollResults){
        //Add value to summary, or add to its value
        if (!(roll in resultsSummary)){
            resultsSummary[roll] = 1
        } else {
            resultsSummary[roll]++
        }
    }

    console.log("ok")

    let visualizedResults = []
    for (let i = 1; i < sides+1; i++){
        const rolledCount = resultsSummary[i]
        const rolledAverage = Math.round(rolledCount/howMany*100,2)
        console.log()
        visualizedResults.push(''.concat(rolledAverage, "% (", rolledCount, ")"))
    }

    console.log("Debug results:")
    console.log(visualizedResults)
}


debugDieRolls(10000,20)

