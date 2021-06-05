
let counterDead = 0;
let counterLost = 0;

getHole = index => document.getElementById(`hole${index}`);

for (let index = 1; index <= 9; index++) {
    const hole = getHole(index);
    hole.onclick = () =>{
        if (hole.className.includes('hole_has-mole')) {
            counterDead ++;
        } else {
            counterLost ++;  
        };
        document.getElementById("dead").textContent = counterDead;
        document.getElementById("lost").textContent = counterLost;
        if (counterDead === 10) {
            window.alert("Победа!");
            counterDead = 0;
            counterLost = 0;
        } else if (counterLost === 5) {
            window.alert("Вы проиграли!");
            counterDead = 0;
            counterLost = 0;
        };
        document.getElementById("dead").textContent = counterDead;
        document.getElementById("lost").textContent = counterLost;
    };

};



