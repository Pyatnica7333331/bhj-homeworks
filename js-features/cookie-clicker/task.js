const cookie = document.getElementById("cookie");
let counter = 0;
let speed = 0;
let timeOfClick = Date.now();
cookie.onclick = () =>{
    counter ++;
    document.getElementById("clicker__counter").textContent = counter;
    if(counter % 2 === 1) {
        cookie.width = 150;
    } else {
        cookie.width = 250;
    };
    speed = (1 / (Date.now() - timeOfClick) * 1000).toFixed(2);
    timeOfClick = Date.now();
    document.getElementById("speed").textContent = speed; 
};
