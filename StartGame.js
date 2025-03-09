import { ladders, snakes} from "./Input.js";
import { rollDice } from "./DiceRoll.js";
import readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let players = [0,0];

let player=0;

do {

        let diceValue = rollDice();
        players[player] += diceValue;
        if (players[player] > 100) {
            players[player] -= diceValue;
            continue;
        }
        if (players[player] === 100) {
            console.log(`Player ${player + 1} wins`);
            break;
        }
        for (let j = 0; j < 10; j++) {
            if (players[player] === snakes[j][0]) {
                players[player] = snakes[j][1];
                console.log(`Player ${player + 1} got bitten by a snake and is at ${players[player]}`);
                player === 0 ? player = 1 : player = 0;
                break;
            }
            if (players[player] === ladders[j][0]) {
                players[player] = ladders[j][1];
                console.log(`Player ${player + 1} climbed a ladder and is at ${players[player]}`);
                player === 0 ? player = 1 : player = 0;
                break;
            }
        }
        console.log(`Player ${player + 1} rolled a ${diceValue} and is at ${players[player]}`);
        player === 0 ? player = 1 : player = 0;
    
    
} while (players.some(player => player < 100));

