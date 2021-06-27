const rotatorCase = document.querySelectorAll(".rotator__case");
let counter = 0;
const words = ["green","red","blue", "grey", "yellow", "orange", "pink"];


setInterval(() => {
    rotatorCase.forEach((element)=> element.classList.remove("rotator__case_active"));
    let index = Math.floor(Math.random() * words.length);
    rotatorCase[counter].classList.add("rotator__case_active");
    rotatorCase[counter].style.color = words[index];
    counter++;
    if(counter === rotatorCase.length) 
        counter = 0;
}, rotatorCase[counter].getAttribute("data-speed")
      
);


