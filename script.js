let player1 = "Rafael"
let player2 = "Manoel"
let player3 = "Daniel"

function positions(firstPlace, secondPlace, lastPlace) {
    let posicoes = [firstPlace, secondPlace, lastPlace]

    if (secondPlace === "Daniel") {
        posicoes = [secondPlace, firstPlace, lastPlace]
    }
            
    else if (lastPlace === "Daniel") {
        posicoes = [firstPlace, lastPlace, secondPlace]                
    }
            
    return "1º Colocado " + posicoes[0] + ", 2º Colocado " + posicoes[1] + ", 3º Colocado " + posicoes[2]

    }

    console.log("Seguem as possibilidades de classificação:")

    console.log("1 - Se o Daniel chegar em terceiro, o pódio poderá ficar assim: ", positions(player1, player2, player3))
    console.log("Ou assim: ", positions(player2, player1, player3))

    console.log("2 - Se o Daniel chegar em segundo, o pódio poderá ficar assim: ", positions(player3, player1, player2,))
    console.log("Ou assim: ", positions(player3, player2, player1))

    console.log("3 - Se o Daniel chegar em primeiro, o pódio repetirá os mesmos resultados da possibilidade 2.")