let player = {
    nome: "",
    classe: "",
    hp: "",
    maxhp: "",
    atk: "",
    lvl: 0,
    blood: 100
}

let classes = [
    { id: 1, nome: "Guerreiro", hp: 120, atk: 18 },
    { id: 2, nome: "Mago", hp: 80, atk: 25 },
    { id: 3, nome: "Arqueiro", hp: 100, atk: 20 }
]

module.exports = { player, classes }
