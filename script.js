
function snapCrackle(maxValue) {
    let auxuliarMax = []

    for (let i = 1; i <= maxValue; i++) {
        if (i % 2 !== 0 && i % 5 === 0) {
            auxuliarMax.push("SnapCrackle")
        }
        else if (i % 2 !== 0) {
            auxuliarMax.push("Snap")
        }
        else if (i % 5 === 0) {

            auxuliarMax.push("Crackle")
        } else {
            auxuliarMax.push(i)
        }
    }

    return auxuliarMax.toString()
}

console.log(snapCrackle(12))
//////////////////////////////////////////////////////////////////////////////////////
function snapCracklePrime(maxValeu) {

    let auxiliarMaxPrime = []

    for (let i = 0; i < maxValeu; i++) {
        if (i % 2 !== 0 && i % 5 !== 0 && i % 3 !== 0) {
            auxiliarMaxPrime.push("Prime")
        }
        else if (i % 2 !== 0 && i % 5 === 0) {
            auxiliarMaxPrime.push("SnapCrackle")
        }
        else if (i % 2 !== 0) {

            auxiliarMaxPrime.push("Snap")
        } else if (i % 5 === 0) {
            auxiliarMaxPrime.push("Crackle")
        } else {
            auxiliarMaxPrime.push(i)
        }
    }
    return auxiliarMaxPrime.toString()
}
console.log(snapCracklePrime(15))