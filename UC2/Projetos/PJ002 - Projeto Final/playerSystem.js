let player = {
    name: "",
    classe: "",
    hp: "",
    maxhp: "",
    atk: "",
    def: "",
    lvl: 1,
    blood: 100,
    enemiesDefeated: 0,
    enemiesDefType: [],
    restTimes: 0,
    hasEscaped: 0,
    tempAtkBonus: 0,
    bonusRounds: 0
}

// Classes contendo as informações dos jogadores

let classes = [
    { id: 1, name: "Guerreiro", hp: 120, atk: 18, def: 12 },
    { id: 2, name: "Mago", hp: 80, atk: 25, def: 8 },
    { id: 3, name: "Arqueiro", hp: 100, atk: 20, def: 10 }
]

module.exports = { player, classes }
