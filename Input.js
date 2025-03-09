
function isConflict(head, tail, array) {
    return array.some(([h, t]) => h === head || t === tail);
}

const snakes=Array.from({length:10},()=>Array(2).fill(null));
const ladders=Array.from({length:10},()=>Array(2).fill(null));

for(let i=0;i<10;i++){
    snakes[i][0] = Math.floor(Math.random() * 99) + 1; 
    snakes[i][1] = Math.floor(Math.random() * snakes[i][0]);
}
for(let i=0;i<10;i++){
    let head, tail;
    do{
     head = Math.floor(Math.random() * 99) + 1;
     tail = Math.floor(Math.random() * head);
    }while(isConflict(head, tail, snakes));

    ladders[i][1] = head;
    ladders[i][0] = tail;
}

export { snakes, ladders};