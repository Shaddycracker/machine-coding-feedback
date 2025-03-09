const dice=[1,2,3,4,5,6];

const rollDice=()=>{
    return dice[Math.floor(Math.random()*6)];
}

export {rollDice};