function positions(firstPlace, secondPlace, lastPlace) {
    let posicoes = [firstPlace, secondPlace, lastPlace]

    if (secondPlace === "Daniel") {
        posicoes[0] = posicoes[1]
        posicoes[1] = firstPlace
    }
    
    else if (lastPlace === "Daniel") {
        posicoes[1] = posicoes[2]
        posicoes[2] = secondPlace
    }
    console.log(`1º - Colocado  ${posicoes[0]}`)
    console.log(`2º - Colocado  ${posicoes[1]}`)
    console.log(`3º - Colocado  ${posicoes[2]}`)

}

console.log(positions("Daniel", "Ricardo", "Lucas"))
console.log(positions("Daniel", "Lucas", "Ricardo"))
console.log(positions("Ricardo", "Daniel", "Lucas"))
console.log(positions("Ricardo", "Lucas", "Daniel"))
console.log(positions("Lucas", "Daniel", "Ricardo"))
console.log(positions("Lucas", "Ricardo", "Daniel"))