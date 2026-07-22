let player = {
    nome: "",
    classe: "",
    hp: "",
    maxhp: "",
    atk: "",
    def: "",
    lvl: 0,
    blood: 100,
    enemiesDefeated: 0,
    enemiesDefType: []
}

let classes = [
    { id: 1, nome: "Guerreiro", hp: 120, atk: 18, def: 12 },
    { id: 2, nome: "Mago", hp: 80, atk: 25, def: 8 },
    { id: 3, nome: "Arqueiro", hp: 100, atk: 20, def: 10 }
]

module.exports = { player, classes }
