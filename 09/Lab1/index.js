//lab 1.1
const game = {
    team1: 'Chu Tich Cau lac bo Den la don',
    team2: 'Chu Tich Cau lac bo an xong chay',
    player: [
        [
            'Thu Mon Dung Tuan',
            'Tu',
            'Luong',
            'Thang',
            'Tung',
            'Duong',
            'Thieu',
            'Dang',
            'Tuan Anh',
            'Chien Thang',
            'Quy'
        ],
        [
            'Thu Mon Tra',
            'Huyen Linh',
            'An',
            'Huyen Trang',
            'Diem Quynh',
            'Hai Yen',
            'Huong Thu',
            'Chinh',
            'Cham',
            'Viet Duyen',
            'Thuy Linh'
        ]
    ],
    score: '4:0',
    scored: ['Quy', 'Tuan Anh', 'Thang', 'Tung'],
    date: '12 - 1 - 2023',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5
    }
}
const [player1, player2] = game.player
console.log(player1, player2)
// const allplayer= [game.team1,game.team2,...game.player]
// console.log(allplayer)


const [gk, ...fieldPlayers] = player1
console.log(gk, fieldPlayers)

const allplayer = [...player1, ...player2]
console.log(allplayer)

const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic']

const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2)

const printGoals = function (...players) {
    console.log(players)
    console.log(`${players.length} goals were scored`)
}

printGoals(...game.scored)

team1 < team2 && console.log('Team 1 is more likely to win')
team1 > team2 && console.log('Team 1 is more likely to win')

//lab 1.2
for (let index = 0; index < game.scored.length; index++) {
    const element = game.scored[index];
    console.log(`Goal ${index + 1} :`, element)
}
console.log(`Ti le Thang cua ` + team1, game.team1)
console.log(`Ti le Hoa ` + team1)
console.log(`Ti le Thang cua ` + team2, game.team2)

